export const VER = '4.0.0-alpha.6';

export const DEFAULT_API_URL = '/openapi/v1/app/info';

export const DEFAULT_USER_LS_KEY = 'HelUserRtxName';

/** 第一个载入的版本号，后续接口未指定版本时，总是优先载入一个载入的版本号对应的模块，确保优先使用全局已存在的模块 */
export const DEFAULT_ONLINE_VER = '__default_online_ver__';

export const UNPKG_PREFIX = 'https://unpkg.com';

export const PLAT_UNPKG = 'unpkg';

export const PLAT_HEL = 'hel';

export const DEFAULT_PLAT = PLAT_UNPKG;

export const HEL_EVENTS = {
  // renderApp 发射的是 SUB_APP_LOADED
  // 此处有个小写开头的瑕疵不再做纠正，
  SUB_APP_LOADED: 'subAppLoaded',
  // libReady 发射的是 SUB_LIB_LOADED
  SUB_LIB_LOADED: 'SubLibLoaded',
  // 3.2+ 新增样式字符串获取完毕事件
  STYLE_STR_FETCHED: 'StyleStrFetched',
};

/**
 * 作为应用是否加载 或 样式字符串 是否获取的枚举 map
 * @type {{NOT_LOAD:0, LOADING:1, LOADED:2}}
 */
export const HEL_LOAD_STATUS = {
  NOT_LOAD: 0,
  LOADING: 1,
  LOADED: 2,
};
