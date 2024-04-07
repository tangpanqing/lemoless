var light_list = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

var bg_template = `@light_list: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900;
each(@light_list, {
  .bg-gray-@{value} {
    background: hsl(0, 0, @value*0.001);
  }

  .bg-blue-@{value} {
    background: hsl(220, 100%, @value*0.001);
  }

  .bg-green-@{value} {
    background: hsl(90, 100%, @value*0.001);
  }

  .bg-red-@{value} {
    background: hsl(0, 100%, @value*0.001);
  }
})

.bg-white {
  background: #fff;
}

.bg-black {
  background: #3b3b3b;
}

.bg-transparent {
  background: transparent !important;
}

@media screen and (min-width: 768px) {
  .md\\:bg-transparent {
    background: transparent !important;
  }
}
`;