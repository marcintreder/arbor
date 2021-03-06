'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

var _react = require('react');

var _emotionTheming = require('emotion-theming');

var _propTypes = _interopRequireDefault(require('prop-types'));

require('react-tippy/dist/tippy.css');

var _reactTippy = require('react-tippy');

var _theme = require('./theme');

var _Text = _interopRequireDefault(require('./Text'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var globalTippyStyles =
  /*#__PURE__*/
  (0, _core.css)(
    '.tippy-tooltip.arbor-theme{border-radius:',
    _theme.borderRadius.small,
    ';padding:0;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVc2QiIsImZpbGUiOiIuLi9zcmMvVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAncmVhY3QtdGlwcHkvZGlzdC90aXBweS5jc3MnO1xuaW1wb3J0IHsgVG9vbHRpcCBhcyBUaXBweVRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5cbmltcG9ydCB7IGJvcmRlclJhZGl1cyB9IGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgZ2xvYmFsVGlwcHlTdHlsZXMgPSBjc3NgXG4gIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIHtcbiAgICBib3JkZXItcmFkaXVzOiAke2JvcmRlclJhZGl1cy5zbWFsbH07XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuY29uc3QgVG9vbHRpcCA9ICh7IHRleHQsIGNoaWxkcmVuLCB0aGVtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0b29sdGlwVGV4dCA9IChcbiAgICA8VGV4dFxuICAgICAgey4uLntcbiAgICAgICAgcHg6ICdzbWFsbGVyJyxcbiAgICAgICAgcHk6ICdzbWFsbGVzdCcsXG4gICAgICAgIGZvbnRTaXplOiAnc2l6ZTInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgdGhlbWVcbiAgICAgIH19XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9UZXh0PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFRpcHB5U3R5bGVzfSAvPlxuXG4gICAgICA8VGlwcHlUb29sdGlwXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgdGhlbWU6ICdhcmJvcicsXG4gICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgaHRtbDogdG9vbHRpcFRleHQsXG4gICAgICAgICAgZGlzdGFuY2U6IDgsXG4gICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogMCxcbiAgICAgICAgICBhcnJvd1NpemU6ICdzbWFsbCcsXG4gICAgICAgICAgYW5pbWF0aW9uOiAnZmFkZScsXG4gICAgICAgICAgaW5lcnRpYTogdHJ1ZSxcbiAgICAgICAgICBhbmltYXRlRmlsbDogZmFsc2VcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UaXBweVRvb2x0aXA+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgdG9vbHRpcCB3aGVuIGl0IGlzIGRpc3BsYXllZFxuICAgKiAqL1xuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE5vZGUgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0b29sdGlwLiBUaGlzIHNob3VsZCBiZSBlaXRoZXIgYW4gSWNvbiwgQnV0dG9uLFxuICAgKiBvciBMaW5rLlxuICAgKiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvb2x0aXApO1xuIl19 */label:globalTippyStyles;'
  );

var Tooltip = function Tooltip(_ref) {
  var text = _ref.text,
    children = _ref.children,
    theme = _ref.theme,
    props = _objectWithoutProperties(_ref, ['text', 'children', 'theme']);

  var tooltipText = (0, _core.jsx)(
    _Text.default,
    {
      px: 'smaller',
      py: 'smallest',
      fontSize: 'size2',
      color: 'white',
      theme: theme
    },
    text
  );
  return (0, _core.jsx)(
    _react.Fragment,
    null,
    (0, _core.jsx)(_core.Global, {
      styles: globalTippyStyles
    }),
    (0, _core.jsx)(
      _reactTippy.Tooltip,
      _objectSpread({}, props, {
        theme: 'arbor',
        arrow: true,
        html: tooltipText,
        distance: 8,
        duration: 300,
        updateDuration: 0,
        arrowSize: 'small',
        animation: 'fade',
        inertia: true,
        animateFill: false
      }),
      children
    )
  );
};

Tooltip.propTypes = {
  /**
   * Text to display within the tooltip when it is displayed
   * */
  text: _propTypes.default.string.isRequired,

  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: _propTypes.default.element.isRequired
};

var _default = (0, _emotionTheming.withTheme)(Tooltip);

exports.default = _default;
