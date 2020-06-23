(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.sass ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global sass to this file, and also import other style files */\n/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\nfigcaption,\nfigure {\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Show the overflow in IE.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Show the overflow in Edge.\n */\ninput {\n  overflow: visible;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n  /**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n}\n[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/*\n * Add the correct display in IE 9-.\n */\nmenu {\n  display: block;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: #000000ff;\n  position: relative;\n  font-family: \"Poppins\", sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\n.container {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n}", "",{"version":3,"sources":["C:\\Users\\rpgon\\Desktop\\Projects\\zadanie2/src\\styles.sass","C:\\Users\\rpgon\\Desktop\\Projects\\zadanie2/node_modules\\normalize-scss\\sass\\normalize\\_normalize-mixin.scss","styles.sass","C:\\Users\\rpgon\\Desktop\\Projects\\zadanie2/node_modules\\normalize-scss\\sass\\normalize\\_vertical-rhythm.scss","C:\\Users\\rpgon\\Desktop\\Projects\\zadanie2/src\\sass\\Variables\\Colors.sass"],"names":[],"mappings":"AAAA,4EAAA;AC2CE,gEAAA;AAGE;+EAAA;AAGA;;;;EAAA;AAMA;EAcI,iBAAA;EAAmB,MAAA;EAErB,0BAAA;EAA4B,MAAA;EAC5B,8BAAA;EAAgC,MAAA;ACxDtC;AD6DI;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;AC5DN;AD+DI;;EAAA;AAIA;;;;;;EAME,cAAA;AC7DN;ADgEI;;;EAAA;AAKA;EEhFF,cAAA;EF2FM,gBAAA;ACvER;AD6GI;+EAAA;AAwCA;;EAAA;AAIA;;EAEE,cAAA;ACjJN;ADoJI;;EAAA;AAIA;EAKI,gBAAA;ACtJR;AD0JI;;;EAAA;AAKA;EACE,uBAAA;EAAyB,MAAA;EACzB,SAAA;EAAW,MAAA;EACX,iBAAA;EAAmB,MAAA;ACrJzB;ADwJI;;EAAA;AAIA;EACE,cAAA;ACtJN;ADoKI;;;EAAA;AAKA;EACE,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;AChKtB;ADqKI;+EAAA;AAGA;;;EAAA;AAKA;EACE,6BAAA;EAA+B,MAAA;EAC/B,qCAAA;EAAuC,MAAA;AClK7C;ADuKI;+EAAA;AAGA;;;EAAA;AAKA;EACE,mBAAA;EAAqB,MAAA;EACrB,0BAAA;EAA4B,MAAA;EAC5B,yCAAA;UAAA,iCAAA;EAAmC,MAAA;ACnKzC;ADsKI;;EAAA;AAIA;;EAEE,oBAAA;ACpKN;ADuKI;;EAAA;AAIA;;EAEE,mBAAA;ACrKN;ADwKI;;;EAAA;AAKA;;;EAGE,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ACpKtB;ADuKI;;EAAA;AAIA;EACE,kBAAA;ACrKN;ADwKI;;EAAA;AAIA;EACE,sBAAA;EACA,WAAA;ACtKN;ADyKI;;EAAA;AAIA;EACE,cAAA;ACvKN;AD0KI;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ACxKN;AD2KI;EACE,eAAA;ACxKN;AD2KI;EACE,WAAA;ACxKN;AD6KI;+EAAA;AAGA;;EAAA;AAIA;;EAEE,qBAAA;AC5KN;AD+KI;;EAAA;AAIA;EACE,aAAA;EACA,SAAA;AC7KN;ADgLI;;EAAA;AAIA;EACE,kBAAA;AC9KN;ADiLI;;EAAA;AAIA;EACE,gBAAA;AC/KN;ADoLI;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,uBAAA;EAAmE,MAAA;EACnE,eAAA;EAAiB,MAAA;EAKf,iBAAA;EAAmB,MAAA;EAErB,SAAA;EAAW,MAAA;ACpLjB;ADuLI;;EAAA;AAIA;EACE,iBAAA;ACrLN;ADwLI;;;EAAA;AAKA;;EACS,MAAA;EACP,oBAAA;ACrLN;ADwLI;;;;EAAA;AAMA;;;;EAIE,0BAAA;EAA4B,MAAA;ACrLlC;ADwLI;;;;EAKE;;IAAA;EASA;;IAAA;AC1LN;ADqLM;;;;EACE,kBAAA;EACA,UAAA;AChLR;ADuLM;;;;EACE,8BAAA;AClLR;ADsLI;;EAAA;AAIA;EACE,iBAAA;ACpLN;ADuLI;;;EAAA;AAKA;;EAEE,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;ACnLlB;ADsLI;;EAAA;AAIA;;EAEE,YAAA;ACpLN;ADuLI;;;EAAA;AAKA;EACE,6BAAA;EAA+B,MAAA;EAC/B,oBAAA;EAAsB,MAAA;EAEtB;;IAAA;AClLN;ADsLM;EAEE,wBAAA;ACrLR;ADyLI;;;EAAA;AAKA;EACE,0BAAA;EAA4B,MAAA;EAC5B,aAAA;EAAe,MAAA;ACrLrB;ADwLI;;EAAA;AAIA;EACE,8BAAA;ACtLN;ADyLI;;;;;EAAA;AAOA;EACE,sBAAA;EAAwB,MAAA;EACxB,cAAA;EAAgB,MAAA;EAChB,eAAA;EAAiB,MAAA;EACjB,UAAA;EAAY,MAAA;EACZ,cAAA;EAAgB,MAAA;EAChB,mBAAA;EAAqB,MAAA;ACjL3B;ADoLI;;;EAAA;AAKA;EACE,qBAAA;EAAuB,MAAA;EACvB,wBAAA;EAA0B,MAAA;AChLhC;ADmLI;;EAAA;AAIA;EACE,cAAA;ACjLN;ADsLI;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ACrLN;ADwLI;;EAAA;AAIA;EACE,kBAAA;ACtLN;ADyLI;;EAAA;AAIA;EACE,cAAA;ACvLN;ADgNI;+EAAA;AAGA;;EAAA;AAIA;EACE,qBAAA;AC/MN;ADkNI;;EAAA;AAIA;EACE,aAAA;AChNN;ADqNI;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ACpNN;AF9bA;EACE,SAAA;EACA,UAAA;EACA,qBIPM;EJQN,kBAAA;EACA,kCAAA;AEicF;AF/bA;EACE,sBAAA;AEkcF;AFhcA;EACE,iBAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;AEmcF","file":"styles.sass","sourcesContent":["/* You can add global sass to this file, and also import other style files */\n@import \"sass/index\"\n@import \"./node_modules/normalize-scss/sass/normalize/import-now\"\n\nbody\n  margin: 0\n  padding: 0\n  background: $black\n  position: relative\n  font-family: 'Poppins', sans-serif\n\n*\n  box-sizing: border-box\n\n.container\n  max-width: 1200px\n  width: 100%\n  margin: 0 auto\n  padding: 0 16px\n","// Helper function for the normalize() mixin.\n@function _normalize-include($section, $exclude: null) {\n  // Initialize the global variables needed by this function.\n  @if not global_variable_exists(_normalize-include) {\n    $_normalize-include: () !global;\n    $_normalize-exclude: () !global;\n  }\n  // Since we are given 2 parameters, set the global variables.\n  @if $exclude != null {\n    $include: $section;\n    // Sass doesn't have static variables, so the work-around is to stuff these\n    // values into global variables so we can access them in future calls.\n    $_normalize-include: if(type-of($include) == 'list', $include, ($include)) !global;\n    $_normalize-exclude: if(type-of($exclude) == 'list', $exclude, ($exclude)) !global;\n    @return true;\n  }\n\n  // Check if $section is in the $include list.\n  @if index($_normalize-include, $section) {\n    @return true;\n  }\n  // If $include is set to (all), make sure $section is not in $exclude.\n  @else if not index($_normalize-exclude, $section) and index($_normalize-include, all) {\n    @return true;\n  }\n  @return false;\n}\n\n@mixin normalize($include: (all), $exclude: ()) {\n  // Initialize the helper function by passing it this mixin's parameters.\n  $init: _normalize-include($include, $exclude);\n\n  // If we've customized any font variables, we'll need extra properties.\n  @if $base-line-height != 24px\n    or $base-unit != 'em'\n    or $h2-font-size != 1.5  * $base-font-size\n    or $h3-font-size != 1.17 * $base-font-size\n    or $h4-font-size != 1    * $base-font-size\n    or $h5-font-size != 0.83 * $base-font-size\n    or $h6-font-size != 0.67 * $base-font-size {\n    $normalize-vertical-rhythm: true !global;\n  }\n\n  /*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\n\n  @if _normalize-include(document) {\n    /* Document\n       ========================================================================== */\n\n    /**\n     * 1. Correct the line height in all browsers.\n     * 2. Prevent adjustments of font size after orientation changes in\n     *    IE on Windows Phone and in iOS.\n     */\n\n    html {\n      @if $base-font-family {\n        /* Change the default font family in all browsers (opinionated). */\n        font-family: $base-font-family;\n      }\n      @if $base-font-size != 16px or $normalize-vertical-rhythm {\n        // Correct old browser bug that prevented accessible resizing of text\n        // when root font-size is set with px or em.\n        font-size: ($base-font-size / 16px) * 100%;\n      }\n      @if $normalize-vertical-rhythm {\n        line-height: ($base-line-height / $base-font-size) * 1em; /* 1 */\n      }\n      @else {\n        line-height: 1.15; /* 1 */\n      }\n      -ms-text-size-adjust: 100%; /* 2 */\n      -webkit-text-size-adjust: 100%; /* 2 */\n    }\n  }\n\n  @if _normalize-include(sections) {\n    /* Sections\n       ========================================================================== */\n\n    /**\n     * Remove the margin in all browsers (opinionated).\n     */\n\n    body {\n      margin: 0;\n    }\n\n    /**\n     * Add the correct display in IE 9-.\n     */\n\n    article,\n    aside,\n    footer,\n    header,\n    nav,\n    section {\n      display: block;\n    }\n\n    /**\n     * Correct the font size and margin on `h1` elements within `section` and\n     * `article` contexts in Chrome, Firefox, and Safari.\n     */\n\n    h1 {\n      @include normalize-font-size($h1-font-size);\n      @if $normalize-vertical-rhythm {\n        @include normalize-line-height($h1-font-size);\n      }\n\n      @if $normalize-vertical-rhythm {\n        /* Set 1 unit of vertical rhythm on the top and bottom margins. */\n        @include normalize-margin(1 0, $h1-font-size);\n      }\n      @else {\n        margin: 0.67em 0;\n      }\n    }\n\n    @if $normalize-vertical-rhythm {\n      h2 {\n        @include normalize-font-size($h2-font-size);\n        @include normalize-line-height($h2-font-size);\n        @include normalize-margin(1 0, $h2-font-size);\n      }\n\n      h3 {\n        @include normalize-font-size($h3-font-size);\n        @include normalize-line-height($h3-font-size);\n        @include normalize-margin(1 0, $h3-font-size);\n      }\n\n      h4 {\n        @include normalize-font-size($h4-font-size);\n        @include normalize-line-height($h4-font-size);\n        @include normalize-margin(1 0, $h4-font-size);\n      }\n\n      h5 {\n        @include normalize-font-size($h5-font-size);\n        @include normalize-line-height($h5-font-size);\n        @include normalize-margin(1 0, $h5-font-size);\n      }\n\n      h6 {\n        @include normalize-font-size($h6-font-size);\n        @include normalize-line-height($h6-font-size);\n        @include normalize-margin(1 0, $h6-font-size);\n      }\n    }\n  }\n\n  @if _normalize-include(grouping) {\n    /* Grouping content\n       ========================================================================== */\n\n    @if $normalize-vertical-rhythm {\n      /**\n       * Set 1 unit of vertical rhythm on the top and bottom margin.\n       */\n\n      blockquote {\n        @include normalize-margin(1 $indent-amount);\n      }\n\n      dl,\n      ol,\n      ul {\n        @include normalize-margin(1 0);\n      }\n\n      /**\n       * Turn off margins on nested lists.\n       */\n\n      ol,\n      ul {\n        ol,\n        ul {\n          margin: 0;\n        }\n      }\n\n      dd {\n        margin: 0 0 0 $indent-amount;\n      }\n\n      ol,\n      ul {\n        padding: 0 0 0 $indent-amount;\n      }\n    }\n\n    /**\n     * Add the correct display in IE 9-.\n     */\n\n    figcaption,\n    figure {\n      display: block;\n    }\n\n    /**\n     * Add the correct margin in IE 8.\n     */\n\n    figure {\n      @if $normalize-vertical-rhythm {\n        @include normalize-margin(1 $indent-amount);\n      }\n      @else {\n        margin: 1em $indent-amount;\n      }\n    }\n\n    /**\n     * 1. Add the correct box sizing in Firefox.\n     * 2. Show the overflow in Edge and IE.\n     */\n\n    hr {\n      box-sizing: content-box; /* 1 */\n      height: 0; /* 1 */\n      overflow: visible; /* 2 */\n    }\n\n    /**\n     * Add the correct display in IE.\n     */\n\n    main {\n      display: block;\n    }\n\n    @if $normalize-vertical-rhythm {\n      /**\n       * Set 1 unit of vertical rhythm on the top and bottom margin.\n       */\n\n      p,\n      pre {\n        @include normalize-margin(1 0);\n      }\n    }\n\n    /**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\n\n    pre {\n      font-family: monospace, monospace; /* 1 */\n      font-size: 1em; /* 2 */\n    }\n  }\n\n  @if _normalize-include(links) {\n    /* Links\n       ========================================================================== */\n\n    /**\n     * 1. Remove the gray background on active links in IE 10.\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n     */\n\n    a {\n      background-color: transparent; /* 1 */\n      -webkit-text-decoration-skip: objects; /* 2 */\n    }\n  }\n\n  @if _normalize-include(text) {\n    /* Text-level semantics\n       ========================================================================== */\n\n    /**\n     * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n     */\n\n    abbr[title] {\n      border-bottom: none; /* 1 */\n      text-decoration: underline; /* 2 */\n      text-decoration: underline dotted; /* 2 */\n    }\n\n    /**\n     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n     */\n\n    b,\n    strong {\n      font-weight: inherit;\n    }\n\n    /**\n     * Add the correct font weight in Chrome, Edge, and Safari.\n     */\n\n    b,\n    strong {\n      font-weight: bolder;\n    }\n\n    /**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\n\n    code,\n    kbd,\n    samp {\n      font-family: monospace, monospace; /* 1 */\n      font-size: 1em; /* 2 */\n    }\n\n    /**\n     * Add the correct font style in Android 4.3-.\n     */\n\n    dfn {\n      font-style: italic;\n    }\n\n    /**\n     * Add the correct background and color in IE 9-.\n     */\n\n    mark {\n      background-color: #ff0;\n      color: #000;\n    }\n\n    /**\n     * Add the correct font size in all browsers.\n     */\n\n    small {\n      font-size: 80%;\n    }\n\n    /**\n     * Prevent `sub` and `sup` elements from affecting the line height in\n     * all browsers.\n     */\n\n    sub,\n    sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline;\n    }\n\n    sub {\n      bottom: -0.25em;\n    }\n\n    sup {\n      top: -0.5em;\n    }\n  }\n\n  @if _normalize-include(embedded) {\n    /* Embedded content\n       ========================================================================== */\n\n    /**\n     * Add the correct display in IE 9-.\n     */\n\n    audio,\n    video {\n      display: inline-block;\n    }\n\n    /**\n     * Add the correct display in iOS 4-7.\n     */\n\n    audio:not([controls]) {\n      display: none;\n      height: 0;\n    }\n\n    /**\n     * Remove the border on images inside links in IE 10-.\n     */\n\n    img {\n      border-style: none;\n    }\n\n    /**\n     * Hide the overflow in IE.\n     */\n\n    svg:not(:root) {\n      overflow: hidden;\n    }\n  }\n\n  @if _normalize-include(forms) {\n    /* Forms\n       ========================================================================== */\n\n    /**\n     * 1. Change the font styles in all browsers (opinionated).\n     * 2. Remove the margin in Firefox and Safari.\n     */\n\n    button,\n    input,\n    optgroup,\n    select,\n    textarea {\n      font-family: if($base-font-family, $base-font-family, sans-serif); /* 1 */\n      font-size: 100%; /* 1 */\n      @if $normalize-vertical-rhythm {\n        line-height: ($base-line-height / $base-font-size) * 1em; /* 1 */\n      }\n      @else {\n        line-height: 1.15; /* 1 */\n      }\n      margin: 0; /* 2 */\n    }\n\n    /**\n     * Show the overflow in IE.\n     */\n\n    button {\n      overflow: visible;\n    }\n\n    /**\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\n     * 1. Remove the inheritance of text transform in Firefox.\n     */\n\n    button,\n    select { /* 1 */\n      text-transform: none;\n    }\n\n    /**\n     * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n     *    controls in Android 4.\n     * 2. Correct the inability to style clickable types in iOS and Safari.\n     */\n\n    button,\n    html [type=\"button\"], /* 1 */\n    [type=\"reset\"],\n    [type=\"submit\"] {\n      -webkit-appearance: button; /* 2 */\n    }\n\n    button,\n    [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"] {\n\n      /**\n       * Remove the inner border and padding in Firefox.\n       */\n\n      &::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      /**\n       * Restore the focus styles unset by the previous rule.\n       */\n\n      &:-moz-focusring {\n        outline: 1px dotted ButtonText;\n      }\n    }\n\n    /**\n     * Show the overflow in Edge.\n     */\n\n    input {\n      overflow: visible;\n    }\n\n    /**\n     * 1. Add the correct box sizing in IE 10-.\n     * 2. Remove the padding in IE 10-.\n     */\n\n    [type=\"checkbox\"],\n    [type=\"radio\"] {\n      box-sizing: border-box; /* 1 */\n      padding: 0; /* 2 */\n    }\n\n    /**\n     * Correct the cursor style of increment and decrement buttons in Chrome.\n     */\n\n    [type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n\n    /**\n     * 1. Correct the odd appearance in Chrome and Safari.\n     * 2. Correct the outline style in Safari.\n     */\n\n    [type=\"search\"] {\n      -webkit-appearance: textfield; /* 1 */\n      outline-offset: -2px; /* 2 */\n\n      /**\n       * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n       */\n\n      &::-webkit-search-cancel-button,\n      &::-webkit-search-decoration {\n        -webkit-appearance: none;\n      }\n    }\n\n    /**\n     * 1. Correct the inability to style clickable types in iOS and Safari.\n     * 2. Change font properties to `inherit` in Safari.\n     */\n\n    ::-webkit-file-upload-button {\n      -webkit-appearance: button; /* 1 */\n      font: inherit; /* 2 */\n    }\n\n    /**\n     * Correct the padding in Firefox.\n     */\n\n    fieldset {\n      padding: 0.35em 0.75em 0.625em;\n    }\n\n    /**\n     * 1. Correct the text wrapping in Edge and IE.\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\n     * 3. Remove the padding so developers are not caught out when they zero out\n     *    `fieldset` elements in all browsers.\n     */\n\n    legend {\n      box-sizing: border-box; /* 1 */\n      display: table; /* 1 */\n      max-width: 100%; /* 1 */\n      padding: 0; /* 3 */\n      color: inherit; /* 2 */\n      white-space: normal; /* 1 */\n    }\n\n    /**\n     * 1. Add the correct display in IE 9-.\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n     */\n\n    progress {\n      display: inline-block; /* 1 */\n      vertical-align: baseline; /* 2 */\n    }\n\n    /**\n     * Remove the default vertical scrollbar in IE.\n     */\n\n    textarea {\n      overflow: auto;\n    }\n  }\n\n  @if _normalize-include(interactive) {\n    /* Interactive\n       ========================================================================== */\n\n    /*\n     * Add the correct display in Edge, IE, and Firefox.\n     */\n\n    details {\n      display: block;\n    }\n\n    /*\n     * Add the correct display in all browsers.\n     */\n\n    summary {\n      display: list-item;\n    }\n\n    /*\n     * Add the correct display in IE 9-.\n     */\n\n    menu {\n      display: block;\n\n      @if $normalize-vertical-rhythm {\n        /*\n         * 1. Set 1 unit of vertical rhythm on the top and bottom margin.\n         * 2. Set consistent space for the list style image.\n         */\n\n        @include normalize-margin(1 0); /* 1 */\n        padding: 0 0 0 $indent-amount; /* 2 */\n\n        /**\n         * Turn off margins on nested lists.\n         */\n\n        menu &,\n        ol &,\n        ul & {\n          margin: 0;\n        }\n      }\n    }\n  }\n\n  @if _normalize-include(scripting) {\n    /* Scripting\n       ========================================================================== */\n\n    /**\n     * Add the correct display in IE 9-.\n     */\n\n    canvas {\n      display: inline-block;\n    }\n\n    /**\n     * Add the correct display in IE.\n     */\n\n    template {\n      display: none;\n    }\n  }\n\n  @if _normalize-include(hidden) {\n    /* Hidden\n       ========================================================================== */\n\n    /**\n     * Add the correct display in IE 10-.\n     */\n\n    [hidden] {\n      display: none;\n    }\n  }\n}\n","/* You can add global sass to this file, and also import other style files */\n/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\nfigcaption,\nfigure {\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Show the overflow in Edge.\n */\ninput {\n  overflow: visible;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n  /**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n}\n[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/*\n * Add the correct display in IE 9-.\n */\nmenu {\n  display: block;\n}\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #000000ff;\n  position: relative;\n  font-family: \"Poppins\", sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.container {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n}","//\n// Vertical Rhythm\n//\n// This is the minimal amount of code needed to create vertical rhythm in our\n// CSS. If you are looking for a robust solution, look at the excellent Typey\n// library. @see https://github.com/jptaranto/typey\n\n@function normalize-rhythm($value, $relative-to: $base-font-size, $unit: $base-unit) {\n  @if unit($value) != px {\n    @error \"The normalize vertical-rhythm module only supports px inputs. The typey library is better.\";\n  }\n  @if $unit == rem {\n    @return ($value / $base-font-size) * 1rem;\n  }\n  @else if $unit == em {\n    @return ($value / $relative-to) * 1em;\n  }\n  @else { // $unit == px\n    @return $value;\n  }\n}\n\n@mixin normalize-font-size($value, $relative-to: $base-font-size) {\n  @if unit($value) != 'px' {\n    @error \"normalize-font-size() only supports px inputs. The typey library is better.\";\n  }\n  font-size: normalize-rhythm($value, $relative-to);\n}\n\n@mixin normalize-rhythm($property, $values, $relative-to: $base-font-size) {\n  $value-list: $values;\n  $sep: space;\n  @if type-of($values) == 'list' {\n    $sep: list-separator($values);\n  }\n  @else {\n    $value-list: append((), $values);\n  }\n\n  $normalized-values: ();\n  @each $value in $value-list {\n    @if unitless($value) and $value != 0 {\n      $value: $value * normalize-rhythm($base-line-height, $relative-to);\n    }\n    $normalized-values: append($normalized-values, $value, $sep);\n  }\n  #{$property}: $normalized-values;\n}\n\n@mixin normalize-margin($values, $relative-to: $base-font-size) {\n  @include normalize-rhythm(margin, $values, $relative-to);\n}\n\n@mixin normalize-line-height($font-size, $min-line-padding: 2px) {\n  $lines: ceil($font-size / $base-line-height);\n  // If lines are cramped include some extra leading.\n  @if ($lines * $base-line-height - $font-size) < ($min-line-padding * 2) {\n    $lines: $lines + 1;\n  }\n  @include normalize-rhythm(line-height, $lines, $font-size);\n}\n","$black: #000000ff\r\n$oxford-blue: #14213dff\r\n$orange-web: #fca311ff\r\n$platinum: #e5e5e5ff\r\n$white: #ffffffff\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rpgon\Desktop\Projects\zadanie2\src\styles.sass */"./src/styles.sass");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map