# React Js CRUD

โ๐ป ์์ํ๋ฉด์ ๋งํ๋ ๋ถ๋ถ์ ๊ธฐ๋กํด๋ณด๋ ค๊ณ  ํ๋ค.

### ๐งจ ์ ์  ๋๋๋ค์ด์ blur ์ด๋ฒคํธ ์๋ฌ

blur ์ด๋ฒคํธ๋ ํฌ์ปค์ค๋ฅผ ์์ ๋ ๋ฐ์ํ์ง๋ง ๋ชจ๋ฐ์ผ ๊ธฐ๊ธฐ์์ blur ์ด๋ฒคํธ๊ฐ ์คํ์ด ์๋๋ ์๋ฌ๋ฅผ ๋ฐ๊ฒฌํ์๋ค.
ios์์๋ ์ด๋ฒคํธ๋ฅผ ํญํ๋ฉด ํฌ์ปค์ค๋ฅผ ๋ง์ถ ์ํ๋ก ์ ์ง๋๋ค๊ณ  ํ๋ค. ๊ฒ์ ๊ฒฐ๊ณผ ios์์ mouseout ์ด๋ฒคํธ๊ฐ blur ์ด๋ฒคํธ์ ์ ์ฌํ๊ฒ ์๋ํ๋ค๊ณ  ํ๋ค.

๊ทธ๋์ ์ฑ์ `react-device-detect` ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ถ๊ฐํด, ios๋ฅผ ๊ฐ์งํ์ฌ์ ๋๋๋ค์ด์ ์ด๋ฒคํธ๋ฆฌ์ค๋๋ฅผ ์กฐ๊ฑด๋ณ๋ก ์ถ๊ฐํ๋ ๋ฐฉํฅ์ผ๋ก ํด๊ฒฐํ์๋ค.

#### ํด๊ฒฐ๋ฐฉ๋ฒ

+ ๋จผ์  `yarn add react-device-detect`๋ก ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์น
+ UserDropdown.js ํ์ผ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก ๋ถํฐ isIOS๋ฅผ import

```javascript
// UserDropdown.js
import { isIOS } from 'react-device-detect'
```
+ **๋ฒํผ์ onMouseOut ์ด๋ฒคํธ ๋ฆฌ์ค๋๋ฅผ ์ผํญ์ฐ์ฐ์๋ก ์ถ๊ฐํ๊ณ  ํ์ธ ๊ฒฐ๊ณผ ์ ์๋ํ์๋ค.**

```javascript
 <button
       className={styles.userDropdownToggle}
       onClick={() => toggleDropdown('toggle')}
       onBlur={() => toggleDropdown('remove')}
       onMouseOut={isIOS ? () => toggleDropdown('remove') : null}
  >
```
| ์ฐธ๊ณ ์๋ฃ |
|:----------|
<https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html>
<https://stackoverflow.com/questions/13492881/why-is-blur-event-not-fired-in-ios-safari-mobile-iphone-ipad>
<https://velog.io/@s_keyyy/blur-event-ios-%EC%A0%81%EC%9A%A9%EB%B6%88%EA%B0%80>
