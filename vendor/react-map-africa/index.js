const React = require("react");

function Africa(props) {
  return React.createElement(
    "svg",
    {
      viewBox: "0 0 1000 800",
      role: "img",
      "aria-label": "Africa map",
      ...props,
    },
    React.createElement("rect", {
      x: "0",
      y: "0",
      width: "1000",
      height: "800",
      fill: "currentColor",
      opacity: "0.15",
    }),
    React.createElement(
      "g",
      {
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", {
        d: "M470 118L492 126L518 145L548 164L578 182L602 206L620 236L637 262L653 292L678 320L698 350L708 380L704 410L714 444L730 478L724 512L704 542L682 566L662 590L644 622L632 654L610 682L586 710L558 734L532 752L500 766L468 770L438 764L412 744L386 718L364 690L344 658L318 630L294 598L272 566L254 534L242 504L234 474L224 444L210 416L196 390L188 360L194 328L208 298L232 270L254 244L280 220L310 196L340 176L366 156L390 138L418 126L446 120L470 118Z",
      }),
      React.createElement("path", {
        d: "M746 612L764 632L772 656L766 682L750 708L730 724L714 720L706 696L714 668L724 644L736 624L746 612Z",
      })
    ),
    React.createElement(
      "g",
      {
        fill: "none",
        stroke: "#213164",
        strokeWidth: "2",
        opacity: "0.55",
        strokeLinecap: "round",
      },
      React.createElement("path", {
        d: "M386 718L390 664L378 616L360 570L340 526L322 482L308 438L298 396L292 352L286 306L282 258",
      }),
      React.createElement("path", {
        d: "M468 770L472 716L478 666L488 614L502 566L518 516L538 468L560 424L586 382L618 340",
      }),
      React.createElement("path", {
        d: "M224 444L274 438L326 438L380 444L434 452L488 460L544 470L598 484L654 500",
      })
    )
  );
}

module.exports = Africa;
module.exports.default = Africa;
