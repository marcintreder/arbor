'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _Grid = _interopRequireDefault(require('./Grid'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var gridStyles = function gridStyles(_ref) {
  var children = _ref.children;
  return (
    /*#__PURE__*/
    (0, _core.css)(
      'grid-template-columns:repeat(',
      children.length,
      ',1fr);/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLd0MiLCJmaWxlIjoiLi4vc3JjL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5cbmNvbnN0IGdyaWRTdHlsZXMgPSAoeyBjaGlsZHJlbiB9KSA9PiBjc3NgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7Y2hpbGRyZW4ubGVuZ3RofSwgMWZyKTtcbmA7XG5cbmNvbnN0IENhcmRBY3Rpb25zID0gc3R5bGVkKEdyaWQud2l0aENvbXBvbmVudCgnZGl2JykpYFxuICAke2dyaWRTdHlsZXN9O1xuYDtcblxuQ2FyZEFjdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBncmlkR2FwOiAnc21hbGwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9ucztcbiJdfQ== */label:gridStyles;'
    )
  );
};

var CardActions =
  /*#__PURE__*/
  (0, _styled.default)(
    _Grid.default.withComponent('div', {
      target: 'emp3b8f1'
    }),
    {
      label: 'CardActions',
      target: 'emp3b8f0'
    }
  )(
    gridStyles,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUQiLCJmaWxlIjoiLi4vc3JjL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5cbmNvbnN0IGdyaWRTdHlsZXMgPSAoeyBjaGlsZHJlbiB9KSA9PiBjc3NgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7Y2hpbGRyZW4ubGVuZ3RofSwgMWZyKTtcbmA7XG5cbmNvbnN0IENhcmRBY3Rpb25zID0gc3R5bGVkKEdyaWQud2l0aENvbXBvbmVudCgnZGl2JykpYFxuICAke2dyaWRTdHlsZXN9O1xuYDtcblxuQ2FyZEFjdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBncmlkR2FwOiAnc21hbGwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9ucztcbiJdfQ== */'
  );
CardActions.defaultProps = {
  gridGap: 'small'
};
var _default = CardActions;
exports.default = _default;
