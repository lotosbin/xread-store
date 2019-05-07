import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';


i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        resources: {
            en: {
                translation: {
                    "xRead Store": "xRead Store",
                }
            },
            zh: {
                translation: {
                    "xRead Store": "来阅读商店",
                    "xRead": "来阅读",
                    "Store": "商店",
                    "Dark Mode": "暗色模式",
                    "Home": "首页",
                    "Topic": "分类",
                    "Tag": "标签",
                    "Feed": "频道",
                    "Advice": "建议",
                    "Login": "登录",
                    "Logout": "退出",
                    "Filter": "筛选",
                    "subscribe": "订阅",
                    "URL": "网址",
                    "Title": "标题",
                    "Refetch": "刷新",
                    "More": "更多",
                    "Empty": "没有更多内容",
                    "Loading": "加载中",
                    "Error": "出错啦",
                    "Mark Read": "标记已读",
                    "Mark Spam": "标记垃圾",
                    "All": "全部",
                    "Unread Only": "未读",
                    "Inbox": "收件箱",
                    "Spam": "垃圾箱",
                    "box": "邮箱",
                    "tags": "标签",
                    "feed": "频道",
                    "inbox": "收件箱",
                    "spam": "垃圾箱",
                    "Read": "已读",
                    "priority": "优先级",
                }
            }
        },

        // react i18next special options (optional)
        // override if needed - omit if ok with defaults
        /*
        react: {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: true,
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
          useSuspense: true,
        }
        */
    });


export default i18n;