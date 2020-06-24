function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/GithubModue/Github.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/GithubModue/Github.module.ts ***!
    \**********************************************/

  /*! exports provided: GithubModule */

  /***/
  function srcAppGithubModueGithubModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubModule", function () {
      return GithubModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _Services_Github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Services/Github.service */
    "./src/app/GithubModue/Services/Github.service.ts");
    /* harmony import */


    var _Store_Effects_Github_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Store/Effects/Github.effects */
    "./src/app/GithubModue/Store/Effects/Github.effects.ts");
    /* harmony import */


    var _Store_Reducers_Github_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Store/Reducers/Github.store */
    "./src/app/GithubModue/Store/Reducers/Github.store.ts");
    /* harmony import */


    var _Store_Reducers_GithubUser_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Store/Reducers/GithubUser.reducer */
    "./src/app/GithubModue/Store/Reducers/GithubUser.reducer.ts");

    var GithubModule = function GithubModule() {
      _classCallCheck(this, GithubModule);
    };

    GithubModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: GithubModule
    });
    GithubModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function GithubModule_Factory(t) {
        return new (t || GithubModule)();
      },
      providers: [_Services_Github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"]],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_Store_Effects_Github_effects__WEBPACK_IMPORTED_MODULE_5__["GithubEffects"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_Store_Reducers_Github_store__WEBPACK_IMPORTED_MODULE_6__["githubFeatureKey"], _Store_Reducers_GithubUser_reducer__WEBPACK_IMPORTED_MODULE_7__["GithubUserReducer"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GithubModule, {
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GithubModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_Store_Effects_Github_effects__WEBPACK_IMPORTED_MODULE_5__["GithubEffects"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_Store_Reducers_Github_store__WEBPACK_IMPORTED_MODULE_6__["githubFeatureKey"], _Store_Reducers_GithubUser_reducer__WEBPACK_IMPORTED_MODULE_7__["GithubUserReducer"])],
          providers: [_Services_Github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"]],
          bootstrap: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/GithubModue/Services/Github.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/GithubModue/Services/Github.service.ts ***!
    \********************************************************/

  /*! exports provided: GithubService */

  /***/
  function srcAppGithubModueServicesGithubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubService", function () {
      return GithubService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GithubService = /*#__PURE__*/function () {
      function GithubService(http) {
        _classCallCheck(this, GithubService);

        this.http = http;
        this.baseUrl = 'https://api.github.com';
      }

      _createClass(GithubService, [{
        key: "parseUrl",
        value: function parseUrl(url) {
          return url.replace(/{.+?}/, '');
        }
      }, {
        key: "getUser",
        value: function getUser(username) {
          return this.http.get("".concat(this.baseUrl, "/users/").concat(username), {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }, {
        key: "getUsersRepositories",
        value: function getUsersRepositories(user) {
          return this.http.get(user.repos_url, {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          }));
        }
      }, {
        key: "getRepoBranches",
        value: function getRepoBranches(repo) {
          return this.http.get(this.parseUrl(repo.branches_url), {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          }));
        }
      }, {
        key: "headers",
        get: function get() {
          return {
            'Content-Type': 'application/json',
            Authorization: '443322e43320fd3a374b736708d65d606091714f'
          };
        }
      }]);

      return GithubService;
    }();

    GithubService.ɵfac = function GithubService_Factory(t) {
      return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GithubService,
      factory: GithubService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/GithubModue/Store/Actions/Github.actions.ts":
  /*!*************************************************************!*\
    !*** ./src/app/GithubModue/Store/Actions/Github.actions.ts ***!
    \*************************************************************/

  /*! exports provided: fetchUser, fetchUserSuccess, fetchUserError, fetchUsersRepos, fetchUsersReposSuccess, fetchUsersReposError, fetchRepoBranches, fetchRepoBranchesSuccess, fetchRepoBranchesError, GithubActions */

  /***/
  function srcAppGithubModueStoreActionsGithubActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchUser", function () {
      return fetchUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchUserSuccess", function () {
      return fetchUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchUserError", function () {
      return fetchUserError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchUsersRepos", function () {
      return fetchUsersRepos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchUsersReposSuccess", function () {
      return fetchUsersReposSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchUsersReposError", function () {
      return fetchUsersReposError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchRepoBranches", function () {
      return fetchRepoBranches;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchRepoBranchesSuccess", function () {
      return fetchRepoBranchesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchRepoBranchesError", function () {
      return fetchRepoBranchesError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubActions", function () {
      return GithubActions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var fetchUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchUserError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get User Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchUsersRepos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get User`s repositories', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchUsersReposSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get User`s repositories Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchUsersReposError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get User`s repositories Error');
    var fetchRepoBranches = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get Repo`s branches', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchRepoBranchesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get Repo`s branches Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchRepoBranchesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Github] Get Repo`s branches Error');
    var GithubActions = {
      User: {
        Load: {
          Success: fetchUserSuccess,
          Error: fetchUserError,
          Fetch: fetchUser
        },
        Repos: {
          Success: fetchUsersReposSuccess,
          Error: fetchUsersReposError,
          Fetch: fetchUsersRepos,
          Branches: {
            Fetch: fetchRepoBranches,
            Success: fetchRepoBranchesSuccess,
            Error: fetchRepoBranchesError
          }
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/GithubModue/Store/Effects/Github.effects.ts":
  /*!*************************************************************!*\
    !*** ./src/app/GithubModue/Store/Effects/Github.effects.ts ***!
    \*************************************************************/

  /*! exports provided: GithubEffects */

  /***/
  function srcAppGithubModueStoreEffectsGithubEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubEffects", function () {
      return GithubEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Actions/Github.actions */
    "./src/app/GithubModue/Store/Actions/Github.actions.ts");
    /* harmony import */


    var _Services_Github_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Services/Github.service */
    "./src/app/GithubModue/Services/Github.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var GithubEffects = function GithubEffects(actions$, githubService, store) {
      var _this = this;

      _classCallCheck(this, GithubEffects);

      this.actions$ = actions$;
      this.githubService = githubService;
      this.store = store;
      this.fetchGithubUser = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          return _this.githubService.getUser(action.username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user !== null) {
              return Object(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUserSuccess"])({
                user: user
              });
            } else {
              return Object(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUserError"])({
                msg: 'User not found'
              });
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUserError"]);
          }));
        }));
      });
      this.fetchGithubUsersRepos = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUsersRepos"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          return _this.githubService.getUsersRepositories(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (repos) {
            return Object(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUsersReposSuccess"])({
              repos: repos
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUsersReposError"]);
          }));
        }));
      });
      this.fetchGithubUsersReposBranches = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["GithubActions"].User.Repos.Branches.Fetch), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (action) {
          return _this.githubService.getRepoBranches(action.repo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (branches) {
            return _Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["GithubActions"].User.Repos.Branches.Success({
              branches: branches,
              repo: action.repo
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_4__["GithubActions"].User.Repos.Branches.Error);
          }));
        }));
      });
    };

    GithubEffects.ɵfac = function GithubEffects_Factory(t) {
      return new (t || GithubEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_Github_service__WEBPACK_IMPORTED_MODULE_5__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]));
    };

    GithubEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GithubEffects,
      factory: GithubEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _Services_Github_service__WEBPACK_IMPORTED_MODULE_5__["GithubService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/GithubModue/Store/Reducers/Github.store.ts":
  /*!************************************************************!*\
    !*** ./src/app/GithubModue/Store/Reducers/Github.store.ts ***!
    \************************************************************/

  /*! exports provided: githubFeatureKey, repositoryAdapter, branchAdapter, initialGithubState */

  /***/
  function srcAppGithubModueStoreReducersGithubStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "githubFeatureKey", function () {
      return githubFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "repositoryAdapter", function () {
      return repositoryAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "branchAdapter", function () {
      return branchAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialGithubState", function () {
      return initialGithubState;
    });
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/entity */
    "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
    /* harmony import */


    var _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../lib/Store/Common */
    "./src/lib/Store/Common.ts");

    var githubFeatureKey = 'github';
    var repositoryAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(model) {
        return model.data.node_id;
      }
    });
    var branchAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(model) {
        return model.name;
      }
    });
    var initialGithubState = {
      user: {
        data: null,
        status: _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["CommonStoreStatusInit"],
        repos: {
          data: repositoryAdapter.getInitialState(),
          status: _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["CommonStoreStatusInit"]
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/GithubModue/Store/Reducers/GithubUser.reducer.ts":
  /*!******************************************************************!*\
    !*** ./src/app/GithubModue/Store/Reducers/GithubUser.reducer.ts ***!
    \******************************************************************/

  /*! exports provided: GithubUserReducer */

  /***/
  function srcAppGithubModueStoreReducersGithubUserReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubUserReducer", function () {
      return GithubUserReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../lib/Store/Common */
    "./src/lib/Store/Common.ts");
    /* harmony import */


    var _Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Actions/Github.actions */
    "./src/app/GithubModue/Store/Actions/Github.actions.ts");
    /* harmony import */


    var _Github_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Github.store */
    "./src/app/GithubModue/Store/Reducers/Github.store.ts");

    var GithubUserReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_Github_store__WEBPACK_IMPORTED_MODULE_3__["initialGithubState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUser"], function (state) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          data: null,
          status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onLoadingState"])
        })
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUserSuccess"], function (state, action) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          data: action.user,
          status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onSuccessState"])
        })
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUserError"], function (state, action) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          data: null,
          status: Object.assign(Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onErrorState"]), {
            errorMessage: action.msg
          })
        })
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsersRepos"], function (state) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          repos: {
            data: _Github_store__WEBPACK_IMPORTED_MODULE_3__["repositoryAdapter"].getInitialState(),
            status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onLoadingState"])
          }
        })
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsersReposSuccess"], function (state, action) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          repos: {
            data: _Github_store__WEBPACK_IMPORTED_MODULE_3__["repositoryAdapter"].setAll(action.repos.map(function (repo) {
              return {
                data: repo,
                branches: {
                  data: _Github_store__WEBPACK_IMPORTED_MODULE_3__["branchAdapter"].getInitialState(),
                  status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["CommonStoreStatusInit"])
                }
              };
            }), state.user.repos.data),
            status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onSuccessState"])
          }
        })
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsersReposError"], function (state) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          repos: {
            data: _Github_store__WEBPACK_IMPORTED_MODULE_3__["repositoryAdapter"].getInitialState(),
            status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onErrorState"])
          }
        })
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["fetchRepoBranchesSuccess"], function (state, action) {
      return {
        user: Object.assign(Object.assign({}, state.user), {
          repos: Object.assign(Object.assign({}, state.user.repos), {
            data: _Github_store__WEBPACK_IMPORTED_MODULE_3__["repositoryAdapter"].updateOne({
              id: action.repo.node_id,
              changes: {
                branches: {
                  data: _Github_store__WEBPACK_IMPORTED_MODULE_3__["branchAdapter"].setAll(action.branches, state.user.repos.data.entities[action.repo.node_id].branches.data),
                  status: Object.assign({}, _lib_Store_Common__WEBPACK_IMPORTED_MODULE_1__["onSuccessState"])
                }
              }
            }, state.user.repos.data)
          })
        })
      };
    }));
    /***/
  },

  /***/
  "./src/app/GithubModue/Store/Selectors/github.selectors.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/GithubModue/Store/Selectors/github.selectors.ts ***!
    \*****************************************************************/

  /*! exports provided: githubState, GithubSelectos */

  /***/
  function srcAppGithubModueStoreSelectorsGithubSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "githubState", function () {
      return githubState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubSelectos", function () {
      return GithubSelectos;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _Reducers_Github_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Reducers/Github.store */
    "./src/app/GithubModue/Store/Reducers/Github.store.ts");

    var githubState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_Reducers_Github_store__WEBPACK_IMPORTED_MODULE_1__["githubFeatureKey"]);
    var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(githubState, function (state) {
      return state.user.data;
    });
    var getUserStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(githubState, function (state) {
      return state.user.status;
    });
    var getRepos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(githubState, function (state) {
      return state.user.repos.data.entities;
    });
    var getReposStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(githubState, function (state) {
      return state.user.repos.status;
    });
    var getReposBranches = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(githubState, function (state, props) {
      var _a;

      return (_a = state.user.repos.data.entities[props.repoId]) === null || _a === void 0 ? void 0 : _a.branches.data.entities;
    });
    var GithubSelectos = {
      getUser: getUser,
      getUserStatus: getUserStatus,
      getRepos: getRepos,
      getReposStatus: getReposStatus,
      getReposBranches: getReposBranches
    };
    /***/
  },

  /***/
  "./src/app/GithubModue/index.ts":
  /*!**************************************!*\
    !*** ./src/app/GithubModue/index.ts ***!
    \**************************************/

  /*! exports provided: GithubModule */

  /***/
  function srcAppGithubModueIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Github_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Github.module */
    "./src/app/GithubModue/Github.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GithubModule", function () {
      return _Github_module__WEBPACK_IMPORTED_MODULE_0__["GithubModule"];
    });
    /***/

  },

  /***/
  "./src/app/Layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(store, router) {
        _classCallCheck(this, HeaderComponent);

        this.store = store;
        this.router = router;
        this.searchPhrase = '';
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.searchSubscription$ = this.searchSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (username) {
            _this2.router.navigate(['user', username]);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.searchSubscription$) {
            this.searchSubscription$.unsubscribe();
          }
        }
      }, {
        key: "searchChangeHandler",
        value: function searchChangeHandler() {
          this.searchSubject.next(this.searchPhrase);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 1,
      consts: [[1, "header"], [1, "container", "header-content"], [1, "brand"], [1, "search"], ["type", "search", "placeholder", "Github login", 1, "search-input", 3, "ngModel", "ngModelChange", "change"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Github search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.searchPhrase = $event;
          })("change", function HeaderComponent_Template_input_change_5_listener() {
            return ctx.searchChangeHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchPhrase);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.lang-switch[_ngcontent-%COMP%], .search-input[_ngcontent-%COMP%] {\n  height: 32px;\n  border-radius: 16px;\n  border: 2px solid dimgray;\n  outline: none;\n  background: #e5e5e5ff;\n  transition: all 0.1s ease-in;\n  transition-property: border-color, background, box-shadow;\n  padding: 0 16px;\n  font-size: 18px;\n  text-align: center;\n}\n\n.lang-switch[_ngcontent-%COMP%]:focus, .search-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 2px 1px rgba(229, 229, 229, 0.2);\n  background: #ffffffff;\n  border-color: #fca311ff;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: #14213dff;\n  color: #e5e5e5ff;\n  padding: 16px 0;\n  border-bottom: 1px solid #e5e5e5ff;\n  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.4);\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-size: bold 24px/30px;\n}\n\n.search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 32px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGF5b3V0L2hlYWRlci9DOlxcVXNlcnNcXHJwZ29uXFxEZXNrdG9wXFxQcm9qZWN0c1xcemFkYW5pZTIvc3JjXFxhcHBcXExheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9MYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xccnBnb25cXERlc2t0b3BcXFByb2plY3RzXFx6YWRhbmllMi9zcmNcXHNhc3NcXFZhcmlhYmxlc1xcQ29sb3JzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJFUlM7RUZTVCw0QkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRENFO0VBQ0UsZ0RBQUE7RUFDQSxxQkVmSTtFRmdCSix1QkVsQlM7QURtQmI7O0FEQ0E7RUFDRSxxQkV0Qlk7RUZ1QlosZ0JFckJTO0VGc0JULGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0FDRUY7O0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FERkE7RUFDRSxPQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhFO0VBQ0UsV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Nhc3MvaW5kZXhcIlxyXG5cclxuXFw6aG9zdFxyXG4gIHBvc2l0aW9uOiBzdGlja3lcclxuICB0b3A6IDBcclxuXHJcbiVpbnB1dFN0eWxlXHJcbiAgaGVpZ2h0OiAzMnB4XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweFxyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRpbWdyYXlcclxuICBvdXRsaW5lOiBub25lXHJcbiAgYmFja2dyb3VuZDogJHBsYXRpbnVtXHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluXHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yLCBiYWNrZ3JvdW5kLCBib3gtc2hhZG93XHJcbiAgcGFkZGluZzogMCAxNnB4XHJcbiAgZm9udC1zaXplOiAxOHB4XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgJjpmb2N1c1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgkcGxhdGludW0sIC4yKVxyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlXHJcbiAgICBib3JkZXItY29sb3I6ICRvcmFuZ2Utd2ViXHJcblxyXG4uaGVhZGVyXHJcbiAgYmFja2dyb3VuZDogJG94Zm9yZC1ibHVlXHJcbiAgY29sb3I6ICRwbGF0aW51bVxyXG4gIHBhZGRpbmc6IDE2cHggMFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcGxhdGludW1cclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDJweCByZ2JhKCRibGFjaywgLjQpXHJcblxyXG4gICYtY29udGVudFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLmJyYW5kXHJcbiAgZm9udC1zaXplOiBib2xkIDI0cHgvMzBweFxyXG4uc2VhcmNoXHJcbiAgZmxleDogMVxyXG4gIHBhZGRpbmc6IDAgMzJweFxyXG5cclxuICAmLWlucHV0XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgQGV4dGVuZCAlaW5wdXRTdHlsZVxyXG5cclxuLmxhbmctc3dpdGNoXHJcbiAgQGV4dGVuZCAlaW5wdXRTdHlsZVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuLmxhbmctc3dpdGNoLCAuc2VhcmNoLWlucHV0IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBkaW1ncmF5O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1ZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvciwgYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbiAgcGFkZGluZzogMCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYW5nLXN3aXRjaDpmb2N1cywgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMjI5LCAyMjksIDIyOSwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmY2EzMTFmZjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMxNDIxM2RmZjtcbiAgY29sb3I6ICNlNWU1ZTVmZjtcbiAgcGFkZGluZzogMTZweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNWZmO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uaGVhZGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnJhbmQge1xuICBmb250LXNpemU6IGJvbGQgMjRweC8zMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIiRibGFjazogIzAwMDAwMGZmXHJcbiRveGZvcmQtYmx1ZTogIzE0MjEzZGZmXHJcbiRvcmFuZ2Utd2ViOiAjZmNhMzExZmZcclxuJHBsYXRpbnVtOiAjZTVlNWU1ZmZcclxuJHdoaXRlOiAjZmZmZmZmZmZcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.sass']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Layout/layout/layout.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Layout/layout/layout.component.ts ***!
    \***************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/Layout/header/header.component.ts");

    var _c0 = ["*"];

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      ngContentSelectors: _c0,
      decls: 7,
      vars: 0,
      consts: [[1, "layout"], [1, "layout-content", "container"], [1, "footer"], [1, "container"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Github app with way more code than asked for created by Marcin Labryga \xA9 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.layout-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #14213dff;\n  color: #ffffffff;\n  padding: 16px 8px;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #e5e5e5ff;\n  padding: 32px 0;\n  color: #000000ff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGF5b3V0L2xheW91dC9DOlxcVXNlcnNcXHJwZ29uXFxEZXNrdG9wXFxQcm9qZWN0c1xcemFkYW5pZTIvc3JjXFxhcHBcXExheW91dFxcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0xheW91dC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9MYXlvdXQvbGF5b3V0L0M6XFxVc2Vyc1xccnBnb25cXERlc2t0b3BcXFByb2plY3RzXFx6YWRhbmllMi9zcmNcXHNhc3NcXFZhcmlhYmxlc1xcQ29sb3JzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0RGO0FER0U7RUFDRSxPQUFBO0VBQ0EscUJFUlU7RUZTVixnQkVOSTtFRk9KLGlCQUFBO0FDREo7QURHQTtFQUNFLHFCRVhTO0VGWVQsZUFBQTtFQUNBLGdCRWhCTTtFRmlCTixrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Nhc3MvaW5kZXhcIlxyXG5cclxuLmxheW91dFxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHJcbiAgJi1jb250ZW50XHJcbiAgICBmbGV4OiAxXHJcbiAgICBiYWNrZ3JvdW5kOiAkb3hmb3JkLWJsdWVcclxuICAgIGNvbG9yOiAkd2hpdGVcclxuICAgIHBhZGRpbmc6IDE2cHggOHB4XHJcblxyXG4uZm9vdGVyXHJcbiAgYmFja2dyb3VuZDogJHBsYXRpbnVtXHJcbiAgcGFkZGluZzogMzJweCAwXHJcbiAgY29sb3I6ICRibGFja1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG5cclxuIiwiLmxheW91dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxheW91dC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogIzE0MjEzZGZmO1xuICBjb2xvcjogI2ZmZmZmZmZmO1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTVmZjtcbiAgcGFkZGluZzogMzJweCAwO1xuICBjb2xvcjogIzAwMDAwMGZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiJGJsYWNrOiAjMDAwMDAwZmZcclxuJG94Zm9yZC1ibHVlOiAjMTQyMTNkZmZcclxuJG9yYW5nZS13ZWI6ICNmY2EzMTFmZlxyXG4kcGxhdGludW06ICNlNWU1ZTVmZlxyXG4kd2hpdGU6ICNmZmZmZmZmZlxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/user-page/Components/repo-tile/repo-tile.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Pages/user-page/Components/repo-tile/repo-tile.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RepoTileComponent */

  /***/
  function srcAppPagesUserPageComponentsRepoTileRepoTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepoTileComponent", function () {
      return RepoTileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _GithubModue_Store_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../GithubModue/Store/Actions/Github.actions */
    "./src/app/GithubModue/Store/Actions/Github.actions.ts");
    /* harmony import */


    var _GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../GithubModue/Store/Selectors/github.selectors */
    "./src/app/GithubModue/Store/Selectors/github.selectors.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RepoTileComponent_div_8_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", branch_r3.commit.sha, "");
      }
    }

    function RepoTileComponent_div_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RepoTileComponent_div_8_div_4_div_3_Template, 2, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](branch_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", branch_r3.commit);
      }
    }

    function RepoTileComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Branches: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RepoTileComponent_div_8_div_4_Template, 4, 2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branches_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", branches_r1);
      }
    }

    var RepoTileComponent = /*#__PURE__*/function () {
      function RepoTileComponent(store) {
        _classCallCheck(this, RepoTileComponent);

        this.store = store;
      }

      _createClass(RepoTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.repo) {
            this.store.dispatch(_GithubModue_Store_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_3__["GithubActions"].User.Repos.Branches.Fetch({
              repo: this.repo
            }));
          }

          this.branches$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_4__["GithubSelectos"].getReposBranches, {
            repoId: this.repo.node_id
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return Object.values(res);
          }));
        }
      }]);

      return RepoTileComponent;
    }();

    RepoTileComponent.ɵfac = function RepoTileComponent_Factory(t) {
      return new (t || RepoTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    RepoTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepoTileComponent,
      selectors: [["repo-tile"]],
      inputs: {
        repo: "repo"
      },
      decls: 10,
      vars: 6,
      consts: [[1, "repo-name"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
      template: function RepoTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Owner:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RepoTileComponent_div_8_Template, 5, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repo.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repo.description || "No description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.repo.owner.login, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.branches$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  background: #e5e5e5ff;\n  display: flex;\n  flex-direction: column;\n  color: #000000ff;\n  padding: 8px 16px;\n  margin: 4px;\n  width: 50%;\n  min-width: 320px;\n  flex: 1;\n  border: 1px solid #ffffffff;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXNlci1wYWdlL0NvbXBvbmVudHMvcmVwby10aWxlL0M6XFxVc2Vyc1xccnBnb25cXERlc2t0b3BcXFByb2plY3RzXFx6YWRhbmllMi9zcmNcXGFwcFxcUGFnZXNcXHVzZXItcGFnZVxcQ29tcG9uZW50c1xccmVwby10aWxlXFxyZXBvLXRpbGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL1BhZ2VzL3VzZXItcGFnZS9Db21wb25lbnRzL3JlcG8tdGlsZS9DOlxcVXNlcnNcXHJwZ29uXFxEZXNrdG9wXFxQcm9qZWN0c1xcemFkYW5pZTIvc3JjXFxzYXNzXFxWYXJpYWJsZXNcXENvbG9ycy5zYXNzIiwic3JjL2FwcC9QYWdlcy91c2VyLXBhZ2UvQ29tcG9uZW50cy9yZXBvLXRpbGUvcmVwby10aWxlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkNOTTtFRE9OLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FFREY7QUZFRTtFQUNFLGFBQUE7QUVBSjtBRkNFO0VBQ0UsYUFBQTtBRUNKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdXNlci1wYWdlL0NvbXBvbmVudHMvcmVwby10aWxlL3JlcG8tdGlsZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zYXNzL2luZGV4XCJcclxuXHJcblxcOmhvc3RcclxuICBiYWNrZ3JvdW5kOiAkcGxhdGludW1cclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIGNvbG9yOiAkYmxhY2tcclxuICBwYWRkaW5nOiA4cHggMTZweFxyXG4gIG1hcmdpbjogNHB4XHJcbiAgd2lkdGg6IDUwJVxyXG4gIG1pbi13aWR0aDogMzIwcHhcclxuICBmbGV4OiAxXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgaDNcclxuICAgIG1hcmdpbi10b3A6IDBcclxuICBwXHJcbiAgICBtYXJnaW46IDVweCAwXHJcbiIsIiRibGFjazogIzAwMDAwMGZmXHJcbiRveGZvcmQtYmx1ZTogIzE0MjEzZGZmXHJcbiRvcmFuZ2Utd2ViOiAjZmNhMzExZmZcclxuJHBsYXRpbnVtOiAjZTVlNWU1ZmZcclxuJHdoaXRlOiAjZmZmZmZmZmZcclxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1ZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjMDAwMDAwZmY7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBtYXJnaW46IDRweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdCBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCBwIHtcbiAgbWFyZ2luOiA1cHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'repo-tile',
          templateUrl: './repo-tile.component.html',
          styleUrls: ['./repo-tile.component.sass']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        repo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Pages/user-page/Components/repos-list/repos-list.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Pages/user-page/Components/repos-list/repos-list.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ReposListComponent */

  /***/
  function srcAppPagesUserPageComponentsReposListReposListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReposListComponent", function () {
      return ReposListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _GithubModue_Store_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../GithubModue/Store/Actions/Github.actions */
    "./src/app/GithubModue/Store/Actions/Github.actions.ts");
    /* harmony import */


    var _GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../GithubModue/Store/Selectors/github.selectors */
    "./src/app/GithubModue/Store/Selectors/github.selectors.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _repo_tile_repo_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../repo-tile/repo-tile.component */
    "./src/app/Pages/user-page/Components/repo-tile/repo-tile.component.ts");

    function ReposListComponent_div_2_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReposListComponent_div_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r1.errorMessage || "Error", " ");
      }
    }

    function ReposListComponent_div_2_div_3_repo_tile_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "repo-tile", 4);
      }

      if (rf & 2) {
        var repo_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repo", repo_r7);
      }
    }

    function ReposListComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReposListComponent_div_2_div_3_repo_tile_1_Template, 1, 1, "repo-tile", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.repos);
      }
    }

    function ReposListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReposListComponent_div_2_span_1_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReposListComponent_div_2_span_2_Template, 2, 1, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReposListComponent_div_2_div_3_Template, 2, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", status_r1.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", status_r1.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", status_r1.loaded && ctx_r0.repos.length > 0);
      }
    }

    var ReposListComponent = /*#__PURE__*/function () {
      function ReposListComponent(store) {
        _classCallCheck(this, ReposListComponent);

        this.store = store;
      }

      _createClass(ReposListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.reposStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__["GithubSelectos"].getReposStatus));
          this.repos$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__["GithubSelectos"].getRepos)).subscribe(function (res) {
            _this3.repos = Object.values(res).map(function (reso) {
              return reso.data;
            }).filter(function (reso) {
              return reso.fork !== true;
            });
          });
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__["GithubSelectos"].getUser)).subscribe(function (user) {
            if (user !== null) {
              _this3.store.dispatch(_GithubModue_Store_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["GithubActions"].User.Repos.Fetch({
                user: user
              }));
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.repos$) {
            this.repos$.unsubscribe();
          }
        }
      }]);

      return ReposListComponent;
    }();

    ReposListComponent.ɵfac = function ReposListComponent_Factory(t) {
      return new (t || ReposListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    ReposListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReposListComponent,
      selectors: [["app-repos-list"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "repo-list", 4, "ngIf"], [1, "repo-list"], [3, "repo", 4, "ngFor", "ngForOf"], [3, "repo"]],
      template: function ReposListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Repositories:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReposListComponent_div_2_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.reposStatus$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _repo_tile_repo_tile_component__WEBPACK_IMPORTED_MODULE_5__["RepoTileComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".repo-list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXNlci1wYWdlL0NvbXBvbmVudHMvcmVwb3MtbGlzdC9DOlxcVXNlcnNcXHJwZ29uXFxEZXNrdG9wXFxQcm9qZWN0c1xcemFkYW5pZTIvc3JjXFxhcHBcXFBhZ2VzXFx1c2VyLXBhZ2VcXENvbXBvbmVudHNcXHJlcG9zLWxpc3RcXHJlcG9zLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL1BhZ2VzL3VzZXItcGFnZS9Db21wb25lbnRzL3JlcG9zLWxpc3QvcmVwb3MtbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdXNlci1wYWdlL0NvbXBvbmVudHMvcmVwb3MtbGlzdC9yZXBvcy1saXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG8tbGlzdFxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtd3JhcDogd3JhcFxyXG4iLCIucmVwby1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReposListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-repos-list',
          templateUrl: './repos-list.component.html',
          styleUrls: ['./repos-list.component.sass']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/user-page/user-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Pages/user-page/user-page.component.ts ***!
    \********************************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppPagesUserPageUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _GithubModue_Store_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../GithubModue/Store/Actions/Github.actions */
    "./src/app/GithubModue/Store/Actions/Github.actions.ts");
    /* harmony import */


    var _GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GithubModue/Store/Selectors/github.selectors */
    "./src/app/GithubModue/Store/Selectors/github.selectors.ts");
    /* harmony import */


    var src_app_router_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/router.selectors */
    "./src/app/router.selectors.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Components_repos_list_repos_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/repos-list/repos-list.component */
    "./src/app/Pages/user-page/Components/repos-list/repos-list.component.ts");

    function UserPageComponent_div_0_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserPageComponent_div_0_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r1.errorMessage || "Error", " ");
      }
    }

    function UserPageComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "location:\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "company:\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "blog:\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-repos-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r6 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r6.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", user_r6.login);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", user_r6.blog, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.blog);
      }
    }

    function UserPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPageComponent_div_0_span_1_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserPageComponent_div_0_span_2_Template, 2, 1, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserPageComponent_div_0_div_3_Template, 21, 7, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", status_r1.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", status_r1.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, status_r1.loaded && ctx_r0.user$));
      }
    }

    var UserPageComponent = /*#__PURE__*/function () {
      function UserPageComponent(store) {
        _classCallCheck(this, UserPageComponent);

        this.store = store;
      }

      _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_router_selectors__WEBPACK_IMPORTED_MODULE_4__["selectRouteParam"])('username'))).subscribe(function (username) {
            _this4.store.dispatch(_GithubModue_Store_Actions_Github_actions__WEBPACK_IMPORTED_MODULE_2__["GithubActions"].User.Load.Fetch({
              username: username
            }));
          });
          this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__["GithubSelectos"].getUser));
          this.userStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_GithubModue_Store_Selectors_github_selectors__WEBPACK_IMPORTED_MODULE_3__["GithubSelectos"].getUserStatus));
          ;
        }
      }]);

      return UserPageComponent;
    }();

    UserPageComponent.ɵfac = function UserPageComponent_Factory(t) {
      return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPageComponent,
      selectors: [["app-user-page"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "user"], [1, "avatar", 3, "src", "alt"], [1, "data"], [3, "href"]],
      template: function UserPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserPageComponent_div_0_Template, 5, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.userStatus$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _Components_repos_list_repos_list_component__WEBPACK_IMPORTED_MODULE_6__["ReposListComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".user[_ngcontent-%COMP%] {\n  background: #e5e5e5ff;\n  border-radius: 4px;\n  color: #000000ff;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.user[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  max-width: 256px;\n  max-height: 256px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXNlci1wYWdlL0M6XFxVc2Vyc1xccnBnb25cXERlc2t0b3BcXFByb2plY3RzXFx6YWRhbmllMi9zcmNcXGFwcFxcUGFnZXNcXHVzZXItcGFnZVxcdXNlci1wYWdlLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9QYWdlcy91c2VyLXBhZ2UvQzpcXFVzZXJzXFxycGdvblxcRGVza3RvcFxcUHJvamVjdHNcXHphZGFuaWUyL3NyY1xcc2Fzc1xcVmFyaWFibGVzXFxDb2xvcnMuc2FzcyIsInNyYy9hcHAvUGFnZXMvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkNMTTtFRE1OLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUVERjtBRkVFO0VBQ0UsT0FBQTtBRUFKO0FGQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUVDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvc2Fzcy9pbmRleFwiXHJcblxyXG4udXNlclxyXG4gIGJhY2tncm91bmQ6ICRwbGF0aW51bVxyXG4gIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gIGNvbG9yOiAkYmxhY2tcclxuICBwYWRkaW5nOiAxNnB4XHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICBmbGV4LXdyYXA6IHdyYXBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAuZGF0YVxyXG4gICAgZmxleDogMVxyXG4gIC5hdmF0YXJcclxuICAgIG1heC13aWR0aDogMjU2cHhcclxuICAgIG1heC1oZWlnaHQ6IDI1NnB4XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHhcclxuIiwiJGJsYWNrOiAjMDAwMDAwZmZcclxuJG94Zm9yZC1ibHVlOiAjMTQyMTNkZmZcclxuJG9yYW5nZS13ZWI6ICNmY2EzMTFmZlxyXG4kcGxhdGludW06ICNlNWU1ZTVmZlxyXG4kd2hpdGU6ICNmZmZmZmZmZlxyXG4iLCIudXNlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTVmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzAwMDAwMGZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51c2VyIC5kYXRhIHtcbiAgZmxleDogMTtcbn1cbi51c2VyIC5hdmF0YXIge1xuICBtYXgtd2lkdGg6IDI1NnB4O1xuICBtYXgtaGVpZ2h0OiAyNTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-page',
          templateUrl: './user-page.component.html',
          styleUrls: ['./user-page.component.sass']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Pages/user-page/user-page.component */
    "./src/app/Pages/user-page/user-page.component.ts");

    var routes = [{
      path: 'user/:username',
      component: _Pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__["UserPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Layout/layout/layout.component */
    "./src/app/Layout/layout/layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ngrx Github App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_Layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: metaReducers, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _GithubModue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./GithubModue */
    "./src/app/GithubModue/index.ts");
    /* harmony import */


    var _Layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Layout/header/header.component */
    "./src/app/Layout/header/header.component.ts");
    /* harmony import */


    var _Layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Layout/layout/layout.component */
    "./src/app/Layout/layout/layout.component.ts");
    /* harmony import */


    var _Pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Pages/user-page/user-page.component */
    "./src/app/Pages/user-page/user-page.component.ts");
    /* harmony import */


    var _Pages_user_page_Components_repos_list_repos_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Pages/user-page/Components/repos-list/repos-list.component */
    "./src/app/Pages/user-page/Components/repos-list/repos-list.component.ts");
    /* harmony import */


    var _Pages_user_page_Components_repo_tile_repo_tile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Pages/user-page/Components/repo-tile/repo-tile.component */
    "./src/app/Pages/user-page/Components/repo-tile/repo-tile.component.ts");

    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : [];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]
      }, {
        metaReducers: metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]), _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(), !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [], _GithubModue__WEBPACK_IMPORTED_MODULE_11__["GithubModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _Layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _Layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"], _Pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_14__["UserPageComponent"], _Pages_user_page_Components_repos_list_repos_list_component__WEBPACK_IMPORTED_MODULE_15__["ReposListComponent"], _Pages_user_page_Components_repo_tile_repo_tile_component__WEBPACK_IMPORTED_MODULE_16__["RepoTileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _GithubModue__WEBPACK_IMPORTED_MODULE_11__["GithubModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _Layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _Layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"], _Pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_14__["UserPageComponent"], _Pages_user_page_Components_repos_list_repos_list_component__WEBPACK_IMPORTED_MODULE_15__["ReposListComponent"], _Pages_user_page_Components_repo_tile_repo_tile_component__WEBPACK_IMPORTED_MODULE_16__["RepoTileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
            router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]
          }, {
            metaReducers: metaReducers,
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            }
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]), _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(), !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [], _GithubModue__WEBPACK_IMPORTED_MODULE_11__["GithubModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/router.selectors.ts":
  /*!*************************************!*\
    !*** ./src/app/router.selectors.ts ***!
    \*************************************/

  /*! exports provided: selectRouter, selectCurrentRoute, selectQueryParams, selectQueryParam, selectRouteParams, selectRouteParam, selectRouteData, selectUrl */

  /***/
  function srcAppRouterSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouter", function () {
      return selectRouter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCurrentRoute", function () {
      return selectCurrentRoute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectQueryParams", function () {
      return selectQueryParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectQueryParam", function () {
      return selectQueryParam;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouteParams", function () {
      return selectRouteParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouteParam", function () {
      return selectRouteParam;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouteData", function () {
      return selectRouteData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUrl", function () {
      return selectUrl;
    });
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectRouter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');

    var selectors = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["getSelectors"](selectRouter);
    /**
     * select the current route
     * (custom implementation for better typings)
     */


    var selectCurrentRoute = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectRouter, function (state) {
      return state.state.root;
    });
    var selectQueryParams = selectors.selectQueryParams,
        selectQueryParam = selectors.selectQueryParam,
        selectRouteParams = selectors.selectRouteParams,
        selectRouteParam = selectors.selectRouteParam,
        selectRouteData = selectors.selectRouteData,
        selectUrl = selectors.selectUrl;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/lib/Store/Common.ts":
  /*!*********************************!*\
    !*** ./src/lib/Store/Common.ts ***!
    \*********************************/

  /*! exports provided: CommonStoreStatusInit, onLoadingState, onErrorState, onSuccessState */

  /***/
  function srcLibStoreCommonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonStoreStatusInit", function () {
      return CommonStoreStatusInit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onLoadingState", function () {
      return onLoadingState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onErrorState", function () {
      return onErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onSuccessState", function () {
      return onSuccessState;
    });

    var CommonStoreStatusInit = {
      loading: true,
      loaded: false,
      error: false,
      errorMessage: null
    };
    var onLoadingState = {
      loading: true,
      loaded: false,
      error: false
    };
    var onErrorState = {
      loading: false,
      loaded: false,
      error: true
    };
    var onSuccessState = {
      loading: false,
      loaded: true,
      error: false,
      errorMessage: null
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rpgon\Desktop\Projects\zadanie2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map