import type { Font } from './types';

const fonts: Readonly<Font> = Object.freeze({
  scale: {
    default: `-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif`,
    pretendard: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
    code: `Fira Code, Consolas, Monaco, Andale Mono, Ubuntu mono, monospace`,
  },
  sementic: {
    system: '$default',
  },
});

export default fonts;
