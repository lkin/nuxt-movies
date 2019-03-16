<template>
  <svg width="116" height="116" viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="#E6B91E" stroke-width="7" :d="describeArc(116 / 2, 116 / 2, 54, 0, (score * 360 / 100))"></path>
    <text font-family="Montserrat-Medium, Montserrat" font-size="32" font-weight="400" fill="#FFF">
      <tspan text-anchor="middle" x="58" y="70">{{ score }}%</tspan>
    </text>
  </svg>
</template>

<script>
export default {
  name: 'CircularScore',

  props: {
    score: {
      required: true,
      type: Number,
      default: 0
    }
  },


  mounted() {
    // document.getElementById("arc1").setAttribute("d", describeArc(200, 400, 100, 0, 180))
  },

  methods: {
    polarToCartesian: function (centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    },

    describeArc: function (x, y, radius, startAngle, endAngle) {

      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);

      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

      const d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(' ');

      return d;
    }
  }
};
</script>
