function a(e){const n=/[A-Z]/.test(e),c=/[a-z]/.test(e),h=/[0-9]/.test(e),s=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e);let t=0;return e.length>=7&&t++,n&&t++,c&&t++,h&&t++,s&&t++,t}export{a as c};
