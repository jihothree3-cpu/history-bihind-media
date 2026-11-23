(()=>{var Rp=0,xh=1,Dp=2;var Tf=1,eu=2,Ei=3,ii=0,Vt=1,Gt=2,zt=0,Zs=1,yh=2,Sh=3,bh=4,Pp=5,ps=100,Ip=101,Up=102,Bp=103,Lp=104,Np=200,Fp=201,Op=202,kp=203,Pl=204,Il=205,Hp=206,zp=207,Gp=208,Vp=209,Wp=210,Xp=211,Yp=212,qp=213,Kp=214,Ul=0,Bl=1,Ll=2,er=3,Nl=4,Fl=5,Ol=6,kl=7,tu=0,Qp=1,Zp=2,ni=0,Jp=1,jp=2,$p=3,e0=4,t0=5,n0=6,i0=7;var Cf=300,tr=301,nr=302,Hl=303,zl=304,xo=306,Gr=1e3,vs=1001,Gl=1002,Wt=1003,s0=1004;var va=1005;var Kt=1006,$o=1007;var Ci=1008;var Nt=1009,Rf=1010,Df=1011,Vr=1012,nu=1013,qn=1014,ti=1015,ri=1016,iu=1017,su=1018,Xi=1020,Pf=35902,If=1021,Uf=1022,Yn=1023,Bf=1024,Lf=1025,Js=1026,Yi=1027,ru=1028,au=1029,Nf=1030,ou=1031;var lu=1033,Va=33776,Wa=33777,Xa=33778,Ya=33779,Vl=35840,Wl=35841,Xl=35842,Yl=35843,ql=36196,Kl=37492,Ql=37496,Zl=37808,Jl=37809,jl=37810,$l=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,ac=37818,oc=37819,lc=37820,cc=37821,qa=36492,uc=36494,hc=36495,Ff=36283,fc=36284,dc=36285,pc=36286;var Ka=2300,mc=2301,el=2302,Mh=2400,Ah=2401,_h=2402;var Ui=3200,cu=3201;var Of=0,r0=1,Nn="",et="srgb",ai="srgb-linear",yo="linear",_t="srgb";var Us=7680;var wh=519,a0=512,o0=513,l0=514,kf=515,c0=516,u0=517,h0=518,f0=519,Eh=35044;var Th="300 es",Ri=2e3,Qa=2001,An=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ch=1234567,Fr=Math.PI/180,Wr=180/Math.PI;function cr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[t&255]+fn[t>>8&255]+fn[t>>16&255]+fn[t>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function uu(t,e){return(t%e+e)%e}function d0(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function p0(t,e,n){return t!==e?(n-t)/(e-t):0}function Or(t,e,n){return(1-n)*t+n*e}function m0(t,e,n,i){return Or(t,e,1-Math.exp(-n*i))}function g0(t,e=1){return e-Math.abs(uu(t,e*2)-e)}function v0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function x0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function y0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function S0(t,e){return t+Math.random()*(e-t)}function b0(t){return t*(.5-Math.random())}function M0(t){t!==void 0&&(Ch=t);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A0(t){return t*Fr}function _0(t){return t*Wr}function w0(t){return(t&t-1)===0&&t!==0}function E0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function T0(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function C0(t,e,n,i,s){let r=Math.cos,a=Math.sin,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*u,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*g,l*d,o*c);break;case"YXY":t.set(l*d,o*h,l*g,o*c);break;case"ZYZ":t.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Zi={DEG2RAD:Fr,RAD2DEG:Wr,generateUUID:cr,clamp:an,euclideanModulo:uu,mapLinear:d0,inverseLerp:p0,lerp:Or,damp:m0,pingpong:g0,smoothstep:v0,smootherstep:x0,randInt:y0,randFloat:S0,randFloatSpread:b0,seededRandom:M0,degToRad:A0,radToDeg:_0,isPowerOfTwo:w0,ceilPowerOfTwo:E0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:C0,normalize:xn,denormalize:Ks},fe=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class t{constructor(e,n,i,s,r,a,o,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],M=s[7],D=s[2],A=s[5],v=s[8];return r[0]=a*x+o*y+l*D,r[3]=a*m+o*S+l*A,r[6]=a*p+o*M+l*v,r[1]=c*x+h*y+u*D,r[4]=c*m+h*S+u*A,r[7]=c*p+h*M+u*v,r[2]=f*x+d*y+g*D,r[5]=f*m+d*S+g*A,r[8]=f*p+d*M+g*v,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=n*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*n-s*l)*x,e[5]=(s*r-o*n)*x,e[6]=d*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*r)*x,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(tl.makeScale(e,n)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,n){return this.premultiply(tl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new We;function Hf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function R0(){let t=Za("canvas");return t.style.display="block",t}var Rh={};function Lr(t){t in Rh||(Rh[t]=!0,console.warn(t))}function D0(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function P0(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function I0(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ut={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===_t&&(t.r=Di(t.r),t.g=Di(t.g),t.b=Di(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===_t&&(t.r=js(t.r),t.g=js(t.g),t.b=js(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Nn?yo:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Dh=[.64,.33,.3,.6,.15,.06],Ph=[.2126,.7152,.0722],Ih=[.3127,.329],Uh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[ai]:{primaries:Dh,whitePoint:Ih,transfer:yo,toXYZ:Uh,fromXYZ:Bh,luminanceCoefficients:Ph,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:Dh,whitePoint:Ih,transfer:_t,toXYZ:Uh,fromXYZ:Bh,luminanceCoefficients:Ph,outputColorSpaceConfig:{drawingBufferColorSpace:et}}});var Bs,gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=Za("canvas")),Bs.width=e.width,Bs.height=e.height;let i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Za("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},U0=0,Ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function nl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gc.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var B0=0,tn=class t extends An{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=vs,s=vs,r=Kt,a=Ci,o=Yn,l=Nt,c=t.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=cr(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Cf;tn.DEFAULT_ANISOTROPY=1;var Et=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,M=(d+1)/2,D=(p+1)/2,A=(h+f)/4,v=(u+x)/4,P=(g+m)/4;return S>M&&S>D?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=v/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=P/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=v/r,s=P/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends An{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);let s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new Ja(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ht=class extends vc{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ja=class extends tn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends tn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=f,e[n+1]=d,e[n+2]=g,e[n+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let D=Math.sqrt(S),A=Math.atan2(D,p*y);m=Math.sin(m*A)/D,o=Math.sin(o*A)/D}let M=o*y;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[n]=o*g+h*u+l*d-c*f,e[n+1]=l*g+h*f+c*u-o*d,e[n+2]=c*g+h*d+o*f-l*u,e[n+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-n;return this._w=d*a+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lh.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new B,Lh=new si,Pi=class{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),ya.subVectors(this.max,Rr),Ls.subVectors(e.a,Rr),Ns.subVectors(e.b,Rr),Fs.subVectors(e.c,Rr),ki.subVectors(Ns,Ls),Hi.subVectors(Fs,Ns),os.subVectors(Ls,Fs);let n=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-os.z,os.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,os.z,0,-os.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-os.y,os.x,0];return!sl(n,Ls,Ns,Fs,ya)||(n=[1,0,0,0,1,0,0,0,1],!sl(n,Ls,Ns,Fs,ya))?!1:(Sa.crossVectors(ki,Hi),n=[Sa.x,Sa.y,Sa.z],sl(n,Ls,Ns,Fs,ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bi=[new B,new B,new B,new B,new B,new B,new B,new B],Vn=new B,xa=new Pi,Ls=new B,Ns=new B,Fs=new B,ki=new B,Hi=new B,os=new B,Rr=new B,ya=new B,Sa=new B,ls=new B;function sl(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ls.fromArray(t,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=n.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var L0=new Pi,Dr=new B,rl=new B,qi=class{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):L0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let n=Dr.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Dr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(rl)),this.expandByPoint(Dr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mi=new B,al=new B,ba=new B,zi=new B,ol=new B,Ma=new B,ll=new B,$a=class{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){al.copy(e).add(n).multiplyScalar(.5),ba.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(al);let r=e.distanceTo(n)*.5,a=-this.direction.dot(ba),o=zi.dot(this.direction),l=-zi.dot(ba),c=zi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(al).addScaledVector(ba,f),d}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);let i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,s,r){ol.subVectors(n,e),Ma.subVectors(i,e),ll.crossVectors(ol,Ma);let a=this.direction.dot(ll),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);let l=o*this.direction.dot(Ma.crossVectors(zi,Ma));if(l<0)return null;let c=o*this.direction.dot(ol.cross(zi));if(c<0||l+c>a)return null;let h=-o*zi.dot(ll);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class t{constructor(e,n,i,s,r,a,o,l,c,h,u,f,d,g,x,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,u,f,d,g,x,m)}set(e,n,i,s,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=d+g*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=g+d*c,n[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;n[0]=f+x*o,n[4]=g*o-d,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=d*o-g,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;n[0]=f-x*o,n[4]=-a*u,n[8]=g+d*o,n[1]=d+g*o,n[5]=a*h,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;n[0]=l*h,n[4]=g*c-d,n[8]=f*c+x,n[1]=l*u,n[5]=x*c+f,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;n[0]=l*h,n[4]=x-f*u,n[8]=g*u+d,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*u+g,n[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=f*u+x,n[5]=a*h,n[9]=d*u-g,n[2]=g*u-d,n[6]=o*h,n[10]=x*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,F0)}lookAt(e,n,i){let s=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Gi.crossVectors(i,Cn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Gi.crossVectors(i,Cn)),Gi.normalize(),Aa.crossVectors(Cn,Gi),s[0]=Gi.x,s[4]=Aa.x,s[8]=Cn.x,s[1]=Gi.y,s[5]=Aa.y,s[9]=Cn.y,s[2]=Gi.z,s[6]=Aa.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],S=i[7],M=i[11],D=i[15],A=s[0],v=s[4],P=s[8],w=s[12],b=s[1],R=s[5],U=s[9],k=s[13],V=s[2],X=s[6],W=s[10],$=s[14],Y=s[3],se=s[7],de=s[11],Ee=s[15];return r[0]=a*A+o*b+l*V+c*Y,r[4]=a*v+o*R+l*X+c*se,r[8]=a*P+o*U+l*W+c*de,r[12]=a*w+o*k+l*$+c*Ee,r[1]=h*A+u*b+f*V+d*Y,r[5]=h*v+u*R+f*X+d*se,r[9]=h*P+u*U+f*W+d*de,r[13]=h*w+u*k+f*$+d*Ee,r[2]=g*A+x*b+m*V+p*Y,r[6]=g*v+x*R+m*X+p*se,r[10]=g*P+x*U+m*W+p*de,r[14]=g*w+x*k+m*$+p*Ee,r[3]=y*A+S*b+M*V+D*Y,r[7]=y*v+S*R+M*X+D*se,r[11]=y*P+S*U+M*W+D*de,r[15]=y*w+S*k+M*$+D*Ee,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+x*(+n*l*d-n*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+n*c*u-n*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-n*l*u+n*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,S=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,M=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,D=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,A=n*y+i*S+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/A;return e[0]=y*v,e[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*v,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*v,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*v,e[4]=S*v,e[5]=(h*m*r-g*f*r+g*s*d-n*m*d-h*s*p+n*f*p)*v,e[6]=(g*l*r-a*m*r-g*s*c+n*m*c+a*s*p-n*l*p)*v,e[7]=(a*f*r-h*l*r+h*s*c-n*f*c-a*s*d+n*l*d)*v,e[8]=M*v,e[9]=(g*u*r-h*x*r-g*i*d+n*x*d+h*i*p-n*u*p)*v,e[10]=(a*x*r-g*o*r+g*i*c-n*x*c-a*i*p+n*o*p)*v,e[11]=(h*o*r-a*u*r-h*i*c+n*u*c+a*i*d-n*o*d)*v,e[12]=D*v,e[13]=(h*x*s-g*u*s+g*i*f-n*x*f-h*i*m+n*u*m)*v,e[14]=(g*o*s-a*x*s-g*i*l+n*x*l+a*i*m-n*o*m)*v,e[15]=(a*u*s-h*o*s+h*i*l-n*u*l-a*i*f+n*o*f)*v,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,S=l*h,M=l*u,D=i.x,A=i.y,v=i.z;return s[0]=(1-(x+p))*D,s[1]=(d+M)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+S)*v,s[9]=(m-y)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),o=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let c=1/r,h=1/a,u=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,n.setFromRotationMatrix(Wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=Ri){let l=this.elements,c=2*r/(n-e),h=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),d,g;if(o===Ri)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=Ri){let l=this.elements,c=1/(n-e),h=1/(i-s),u=1/(a-r),f=(n+e)*c,d=(i+s)*h,g,x;if(o===Ri)g=(a+r)*u,x=-2*u;else if(o===Qa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Os=new B,Wn=new wt,N0=new B(0,0,0),F0=new B(1,1,1),Gi=new B,Aa=new B,Cn=new B,Nh=new wt,Fh=new si,Fn=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},O0=0,Oh=new B,ks=new si,Ai=new wt,_a=new B,Pr=new B,k0=new B,H0=new si,kh=new B(1,0,0),Hh=new B(0,1,0),zh=new B(0,0,1),Gh={type:"added"},z0={type:"removed"},Hs={type:"childadded",child:null},cl={type:"childremoved",child:null},mn=class t extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new B,n=new Fn,i=new si,s=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new We}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,n){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Pr,_a,this.up):Ai.lookAt(_a,Pr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ai),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(z0),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};mn.DEFAULT_UP=new B(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new B,_i=new B,ul=new B,wi=new B,zs=new B,Gs=new B,Vh=new B,hl=new B,fl=new B,dl=new B,pl=new Et,ml=new Et,gl=new Et,ms=class t{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Xn.subVectors(e,n),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Xn.subVectors(s,n),_i.subVectors(i,n),ul.subVectors(e,n);let a=Xn.dot(Xn),o=Xn.dot(_i),l=Xn.dot(ul),c=_i.dot(_i),h=_i.dot(ul),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(gl,r.z),a}static isFrontFacing(e,n,i,s){return Xn.subVectors(i,n),_i.subVectors(e,n),Xn.cross(_i).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,i),Gs.subVectors(r,i),hl.subVectors(e,i);let l=zs.dot(hl),c=Gs.dot(hl);if(l<=0&&c<=0)return n.copy(i);fl.subVectors(e,s);let h=zs.dot(fl),u=Gs.dot(fl);if(h>=0&&u<=h)return n.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(zs,a);dl.subVectors(e,r);let d=zs.dot(dl),g=Gs.dot(dl);if(g>=0&&d<=g)return n.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Gs,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Vh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),n.copy(s).addScaledVector(Vh,o);let p=1/(m+x+f);return a=x*p,o=f*p,n.copy(i).addScaledVector(zs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function vl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Te=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=ut.workingColorSpace){if(e=uu(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=vl(a,r,e+1/3),this.g=vl(a,r,e),this.b=vl(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,n=et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=et){let i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return ut.fromWorkingColorSpace(dn.copy(this),e),Math.round(an(dn.r*255,0,255))*65536+Math.round(an(dn.g*255,0,255))*256+Math.round(an(dn.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(dn.copy(this),n);let i=dn.r,s=dn.g,r=dn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=et){ut.fromWorkingColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,s=dn.b;return e!==et?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(wa);let i=Or(Vi.h,wa.h,n),s=Or(Vi.s,wa.s,n),r=Or(Vi.l,wa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Te;Te.NAMES=zf;var G0=0,On=class extends An{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=cr(),this.name="",this.blending=Zs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends On{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new B,Ea=new fe,pn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ea.fromBufferAttribute(this,n),Ea.applyMatrix3(e),this.setXY(n,Ea.x,Ea.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),e}};var to=class extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var no=class extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Rt=class extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}},V0=0,Ln=new wt,xl=new mn,Vs=new B,Rn=new Pi,Ir=new Pi,en=new B,ln=class t extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?no:to)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(i,3))}else{for(let i=0,s=n.count;i<s;i++){let r=e[i];n.setXYZ(i,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Rn.min,Ir.min),Rn.expandByPoint(en),en.addVectors(Rn.max,Ir.max),Rn.expandByPoint(en)):(Rn.expandByPoint(Ir.min),Rn.expandByPoint(Ir.max))}Rn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),en.add(Vs)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new B,l[P]=new B;let c=new B,h=new B,u=new B,f=new fe,d=new fe,g=new fe,x=new B,m=new B;function p(P,w,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(x),o[w].add(x),o[b].add(x),l[P].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,w=y.length;P<w;++P){let b=y[P],R=b.start,U=b.count;for(let k=R,V=R+U;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new B,M=new B,D=new B,A=new B;function v(P){D.fromBufferAttribute(s,P),A.copy(D);let w=o[P];S.copy(w),S.sub(D.multiplyScalar(D.dot(w))).normalize(),M.crossVectors(A,w);let R=M.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,w=y.length;P<w;++P){let b=y[P],R=b.start,U=b.count;for(let k=R,V=R+U;k<V;k+=3)v(e.getX(k+0)),v(e.getX(k+1)),v(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new pn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wh=new wt,cs=new $a,Ta=new qi,Xh=new B,Ca=new B,Ra=new B,Da=new B,yl=new B,Pa=new B,Yh=new B,Ia=new B,Le=class extends mn{constructor(e=new ln,n=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yl.fromBufferAttribute(u,e),a?Pa.addScaledVector(yl,h):Pa.addScaledVector(yl.sub(n),h))}n.add(Pa)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Ta.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ta,Xh)===null||cs.origin.distanceToSquared(Xh)>(e.far-e.near)**2))&&(Wh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cs)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,D=S;M<D;M+=3){let A=o.getX(M),v=o.getX(M+1),P=o.getX(M+2);s=Ua(this,p,e,i,c,h,u,A,v,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=Ua(this,a,e,i,c,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,D=S;M<D;M+=3){let A=M,v=M+1,P=M+2;s=Ua(this,p,e,i,c,h,u,A,v,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,S=m+1,M=m+2;s=Ua(this,a,e,i,c,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function W0(t,e,n,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ia);return c<n.near||c>n.far?null:{distance:c,point:Ia.clone(),object:t}}function Ua(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Ca),t.getVertexPosition(l,Ra),t.getVertexPosition(c,Da);let h=W0(t,e,n,i,Ca,Ra,Da,Yh);if(h){let u=new B;ms.getBarycoord(Yh,Ca,Ra,Da,u),s&&(h.uv=ms.getInterpolatedAttribute(s,o,l,c,u,new fe)),r&&(h.uv1=ms.getInterpolatedAttribute(r,o,l,c,u,new fe)),a&&(h.normal=ms.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};ms.getNormal(Ca,Ra,Da,f.normal),h.face=f,h.barycoord=u}return h}var kn=class t extends ln{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(x,m,p,y,S,M,D,A,v,P,w){let b=M/v,R=D/P,U=M/2,k=D/2,V=A/2,X=v+1,W=P+1,$=0,Y=0,se=new B;for(let de=0;de<W;de++){let Ee=de*R-k;for(let ze=0;ze<X;ze++){let Ze=ze*b-U;se[x]=Ze*y,se[m]=Ee*S,se[p]=V,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[p]=A>0?1:-1,h.push(se.x,se.y,se.z),u.push(ze/v),u.push(1-de/P),$+=1}}for(let de=0;de<P;de++)for(let Ee=0;Ee<v;Ee++){let ze=f+Ee+X*de,Ze=f+Ee+X*(de+1),Z=f+(Ee+1)+X*(de+1),re=f+(Ee+1)+X*de;l.push(ze,Ze,re),l.push(Ze,Z,re),Y+=6}o.addGroup(d,Y,w),d+=Y,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ir(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function yn(t){let e={};for(let n=0;n<t.length;n++){let i=ir(t[n]);for(let s in i)e[s]=i[s]}return e}function X0(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gf(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Y0={clone:ir,merge:yn},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends On{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},sr=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new B,qh=new fe,Kh=new fe,on=class extends sr{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,qh,Kh),n.subVectors(Kh,qh)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Ws=-90,Xs=1,yc=class extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Ws,Xs,e,n);s.layers=this.layers,this.add(s);let r=new on(Ws,Xs,e,n);r.layers=this.layers,this.add(r);let a=new on(Ws,Xs,e,n);a.layers=this.layers,this.add(a);let o=new on(Ws,Xs,e,n);o.layers=this.layers,this.add(o);let l=new on(Ws,Xs,e,n);l.layers=this.layers,this.add(l);let c=new on(Ws,Xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},io=class extends tn{constructor(e,n,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:tr,super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends ht{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new io(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kn(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:zt});r.uniforms.tEquirect.value=n;let a=new Le(s,r),o=n.minFilter;return n.minFilter===Ci&&(n.minFilter=Kt),new yc(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},Sl=new B,Q0=new B,Z0=new We,Ti=class{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Sl.subVectors(i,n).cross(Q0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Z0.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new qi,Ba=new B,Xr=class{constructor(e=new Ti,n=new Ti,i=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],S=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+a,f+h,m+g,M+y).normalize(),i[3].setComponents(l-a,f-h,m-g,M-y).normalize(),i[4].setComponents(l-o,f-u,m-x,M-S).normalize(),n===Ri)i[5].setComponents(l+o,f+u,m+x,M+S).normalize();else if(n===Qa)i[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vf(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function J0(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dn=class t extends ln{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=n/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let S=0;S<c;S++){let M=S*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,M=y+c*(p+1),D=y+1+c*(p+1),A=y+1+c*p;d.push(S,M,A),d.push(M,D,A)}this.setIndex(d),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Am=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:j0,alphahash_pars_fragment:$0,alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:am,batching_vertex:om,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:um,iridescence_fragment:hm,bumpmap_pars_fragment:fm,clipping_planes_fragment:dm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:vm,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:Sm,common:bm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Am,displacementmap_pars_vertex:_m,displacementmap_vertex:wm,emissivemap_fragment:Em,emissivemap_pars_fragment:Tm,colorspace_fragment:Cm,colorspace_pars_fragment:Rm,envmap_fragment:Dm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Wm,envmap_vertex:Bm,fog_vertex:Lm,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:km,lightmap_pars_fragment:Hm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Vm,lights_toon_fragment:Xm,lights_toon_pars_fragment:Ym,lights_phong_fragment:qm,lights_phong_pars_fragment:Km,lights_physical_fragment:Qm,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:jm,lights_fragment_end:$m,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:ag,map_particle_pars_fragment:og,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:ug,morphcolor_vertex:hg,morphnormal_vertex:fg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:vg,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:_g,opaque_fragment:wg,packing:Eg,premultiplied_alpha_fragment:Tg,project_vertex:Cg,dithering_fragment:Rg,dithering_pars_fragment:Dg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Bg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ng,skinbase_vertex:Fg,skinning_pars_vertex:Og,skinning_vertex:kg,skinnormal_vertex:Hg,specularmap_fragment:zg,specularmap_pars_fragment:Gg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:Yg,uv_pars_fragment:qg,uv_pars_vertex:Kg,uv_vertex:Qg,worldpos_vertex:Zg,background_vert:Jg,background_frag:jg,backgroundCube_vert:$g,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:sv,distanceRGBA_vert:rv,distanceRGBA_frag:av,equirect_vert:ov,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:uv,meshbasic_vert:hv,meshbasic_frag:fv,meshlambert_vert:dv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:vv,meshnormal_frag:xv,meshphong_vert:yv,meshphong_frag:Sv,meshphysical_vert:bv,meshphysical_frag:Mv,meshtoon_vert:Av,meshtoon_frag:_v,points_vert:wv,points_frag:Ev,shadow_vert:Tv,shadow_frag:Cv,sprite_vert:Rv,sprite_frag:Dv},pe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ei={basic:{uniforms:yn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:yn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:yn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:yn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:yn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:yn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:yn([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:yn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:yn([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:yn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:yn([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:yn([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:yn([pe.lights,pe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ei.physical={uniforms:yn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var La={r:0,b:0,g:0},hs=new Fn,Pv=new wt;function Iv(t,e,n,i,s,r,a){let o=new Te(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?n:e).get(S)),S}function x(y){let S=!1,M=g(y);M===null?p(o,l):M&&M.isColor&&(p(M,1),S=!0);let D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===xo)?(h===void 0&&(h=new Le(new kn(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:ir(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(S.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(hs)),h.material.toneMapped=ut.getTransfer(M.colorSpace)!==_t,(u!==M||f!==M.version||d!==t.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Le(new Dn(2,2),new gt({name:"BackgroundMaterial",uniforms:ir(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ut.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(La,Gf(t)),i.buffers.color.setClear(La.r,La.g,La.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function Uv(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(b,R,U,k,V){let X=!1,W=u(k,U,R);r!==W&&(r=W,c(r.object)),X=d(b,k,U,V),X&&g(b,k,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(b,R,U,k),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function h(b){return t.deleteVertexArray(b)}function u(b,R,U){let k=U.wireframe===!0,V=i[b.id];V===void 0&&(V={},i[b.id]=V);let X=V[R.id];X===void 0&&(X={},V[R.id]=X);let W=X[k];return W===void 0&&(W=f(l()),X[k]=W),W}function f(b){let R=[],U=[],k=[];for(let V=0;V<n;V++)R[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,R,U,k){let V=r.attributes,X=R.attributes,W=0,$=U.getAttributes();for(let Y in $)if($[Y].location>=0){let de=V[Y],Ee=X[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Ee=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Ee=b.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(b,R,U,k){let V={},X=R.attributes,W=0,$=U.getAttributes();for(let Y in $)if($[Y].location>=0){let de=X[Y];de===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));let Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),V[Y]=Ee,W++}r.attributes=V,r.attributesNum=W,r.index=k}function x(){let b=r.newAttributes;for(let R=0,U=b.length;R<U;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){let U=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;U[b]=1,k[b]===0&&(t.enableVertexAttribArray(b),k[b]=1),V[b]!==R&&(t.vertexAttribDivisor(b,R),V[b]=R)}function y(){let b=r.newAttributes,R=r.enabledAttributes;for(let U=0,k=R.length;U<k;U++)R[U]!==b[U]&&(t.disableVertexAttribArray(U),R[U]=0)}function S(b,R,U,k,V,X,W){W===!0?t.vertexAttribIPointer(b,R,U,V,X):t.vertexAttribPointer(b,R,U,k,V,X)}function M(b,R,U,k){x();let V=k.attributes,X=U.getAttributes(),W=R.defaultAttributeValues;for(let $ in X){let Y=X[$];if(Y.location>=0){let se=V[$];if(se===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let de=se.normalized,Ee=se.itemSize,ze=e.get(se);if(ze===void 0)continue;let Ze=ze.buffer,Z=ze.type,re=ze.bytesPerElement,ie=Z===t.INT||Z===t.UNSIGNED_INT||se.gpuType===nu;if(se.isInterleavedBufferAttribute){let ee=se.data,Ne=ee.stride,Se=se.offset;if(ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)p(Y.location+Pe,ee.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)m(Y.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Pe=0;Pe<Y.locationSize;Pe++)S(Y.location+Pe,Ee/Y.locationSize,Z,de,Ne*re,(Se+Ee/Y.locationSize*Pe)*re,ie)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee,se.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let ee=0;ee<Y.locationSize;ee++)S(Y.location+ee,Ee/Y.locationSize,Z,de,Ee*re,Ee/Y.locationSize*ee*re,ie)}}else if(W!==void 0){let de=W[$];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(Y.location,de);break;case 3:t.vertexAttrib3fv(Y.location,de);break;case 4:t.vertexAttrib4fv(Y.location,de);break;default:t.vertexAttrib1fv(Y.location,de)}}}}y()}function D(){P();for(let b in i){let R=i[b];for(let U in R){let k=R[U];for(let V in k)h(k[V].object),delete k[V];delete R[U]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let R=i[b.id];for(let U in R){let k=R[U];for(let V in k)h(k[V].object),delete k[V];delete R[U]}delete i[b.id]}function v(b){for(let R in i){let U=i[R];if(U[b.id]===void 0)continue;let k=U[b.id];for(let V in k)h(k[V].object),delete k[V];delete U[b.id]}}function P(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Bv(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];n.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lv(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Yn&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let P=v===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Nt&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==ti&&!P)}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function Nv(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Ti,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,M=p.clippingState||null;l.value=M,M=h(g,f,S,d);for(let D=0;D!==S;++D)M[D]=n[D];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=d;S!==x;++S,M+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Fv(t){let e=new WeakMap;function n(a,o){return o===Hl?a.mapping=tr:o===zl&&(a.mapping=nr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Hl||o===zl)if(e.has(a)){let l=e.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sc(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var rr=class extends sr{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Qs=4,Qh=[.125,.215,.35,.446,.526,.582],gs=20,bl=new rr,Zh=new Te,Ml=null,Al=0,_l=0,wl=!1,ds=(1+Math.sqrt(5))/2,Ys=1/ds,Jh=[new B(-ds,Ys,0),new B(ds,Ys,0),new B(-Ys,0,ds),new B(Ys,0,ds),new B(0,ds,-Ys),new B(0,ds,Ys),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],so=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Ml=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,Al,_l),this._renderer.xr.enabled=wl,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:ri,format:Yn,colorSpace:ai,depthBuffer:!1},s=jh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ov(r)),this._blurMaterial=kv(r,e,n)}return s}_compileMaterial(e){let n=new Le(this._lodPlanes[0],e);this._renderer.compile(n,bl)}_sceneToCubeUV(e,n,i,s){let o=new on(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zh),h.toneMapping=ni,h.autoClear=!1;let d=new Sn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Le(new kn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Zh),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;Na(s,y*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,bl)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jh[(s-r-1)%Jh.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Le(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let p=[],y=0;for(let v=0;v<gs;++v){let P=v/x,w=Math.exp(-P*P/2);p.push(w),v===0?y+=w:v<m&&(y+=2*w)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let M=this._sizeLods[s],D=3*M*(s>S-Qs?s-S+Qs:0),A=4*(this._cubeSize-M);Na(n,D,A,3*M,2*M),l.setRenderTarget(n),l.render(u,bl)}};function Ov(t){let e=[],n=[],i=[],s=t,r=t-Qs+1+Qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>t-Qs?l=Qh[a-t+Qs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),S=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){let v=A%3*2/3-1,P=A>2?0:-1,w=[v,P,0,v+2/3,P,0,v+2/3,P+1,0,v,P,0,v+2/3,P+1,0,v,P+1,0];y.set(w,x*g*A),S.set(f,m*g*A);let b=[A,A,A,A,A,A];M.set(b,p*g*A)}let D=new ln;D.setAttribute("position",new pn(y,x)),D.setAttribute("uv",new pn(S,m)),D.setAttribute("faceIndex",new pn(M,p)),e.push(D),s>Qs&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jh(t,e,n){let i=new ht(t,e,n);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function kv(t,e,n){let i=new Float32Array(gs),s=new B(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function $h(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function ef(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hv(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Hl||l===zl,h=l===tr||l===nr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new so(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(n===null&&(n=new so(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function zv(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Lr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gv(t,e,n,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],t.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let S=0,M=y.length;S<M;S+=3){let D=y[S+0],A=y[S+1],v=y[S+2];f.push(D,A,A,v,v,D)}}else if(g!==void 0){let y=g.array;x=g.version;for(let S=0,M=y.length/3-1;S<M;S+=3){let D=S+0,A=S+1,v=S+2;f.push(D,A,A,v,v,D)}}else return;let m=new(Hf(f)?no:to)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vv(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*a),n.update(d,i,1)}function c(f,d,g){g!==0&&(t.drawElementsInstanced(i,d,r,f*a,g),n.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];n.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wv(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Xv(t,e,n){let i=new WeakMap,s=new Et;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let w=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=o.attributes.position.count*S,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*D*4*u),v=new ja(A,M,D,u);v.type=ti,v.needsUpdate=!0;let P=S*4;for(let b=0;b<u;b++){let R=m[b],U=p[b],k=y[b],V=M*D*4*b;for(let X=0;X<R.count;X++){let W=X*P;d===!0&&(s.fromBufferAttribute(R,X),A[V+W+0]=s.x,A[V+W+1]=s.y,A[V+W+2]=s.z,A[V+W+3]=0),g===!0&&(s.fromBufferAttribute(U,X),A[V+W+4]=s.x,A[V+W+5]=s.y,A[V+W+6]=s.z,A[V+W+7]=0),x===!0&&(s.fromBufferAttribute(k,X),A[V+W+8]=s.x,A[V+W+9]=s.y,A[V+W+10]=s.z,A[V+W+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new fe(M,D)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function Yv(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var Ki=class extends tn{constructor(e,n,i,s,r,a,o,l,c,h=Js){if(h!==Js&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Js&&(i=qn),i===void 0&&h===Yi&&(i=Xi),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Wf=new tn,tf=new Ki(1,1),Xf=new ja,Yf=new xc,qf=new io,nf=[],sf=[],rf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function ur(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=nf[s];if(r===void 0&&(r=new Float32Array(s),nf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function So(t,e){let n=sf[e];n===void 0&&(n=new Int32Array(e),sf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qv(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kv(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function Qv(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function Zv(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function Jv(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Qt(n,i))return;of.set(i),t.uniformMatrix2fv(this.addr,!1,of),Zt(n,i)}}function jv(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Qt(n,i))return;af.set(i),t.uniformMatrix3fv(this.addr,!1,af),Zt(n,i)}}function $v(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Qt(n,i))return;rf.set(i),t.uniformMatrix4fv(this.addr,!1,rf),Zt(n,i)}}function e1(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function t1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function n1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function i1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function s1(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function r1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function a1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function o1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function l1(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(tf.compareFunction=kf,r=tf):r=Wf,n.setTexture2D(e||r,s)}function c1(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Yf,s)}function u1(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||qf,s)}function h1(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Xf,s)}function f1(t){switch(t){case 5126:return qv;case 35664:return Kv;case 35665:return Qv;case 35666:return Zv;case 35674:return Jv;case 35675:return jv;case 35676:return $v;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return h1}}function d1(t,e){t.uniform1fv(this.addr,e)}function p1(t,e){let n=ur(e,this.size,2);t.uniform2fv(this.addr,n)}function m1(t,e){let n=ur(e,this.size,3);t.uniform3fv(this.addr,n)}function g1(t,e){let n=ur(e,this.size,4);t.uniform4fv(this.addr,n)}function v1(t,e){let n=ur(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function x1(t,e){let n=ur(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function y1(t,e){let n=ur(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function S1(t,e){t.uniform1iv(this.addr,e)}function b1(t,e){t.uniform2iv(this.addr,e)}function M1(t,e){t.uniform3iv(this.addr,e)}function A1(t,e){t.uniform4iv(this.addr,e)}function _1(t,e){t.uniform1uiv(this.addr,e)}function w1(t,e){t.uniform2uiv(this.addr,e)}function E1(t,e){t.uniform3uiv(this.addr,e)}function T1(t,e){t.uniform4uiv(this.addr,e)}function C1(t,e,n){let i=this.cache,s=e.length,r=So(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||Wf,r[a])}function R1(t,e,n){let i=this.cache,s=e.length,r=So(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Yf,r[a])}function D1(t,e,n){let i=this.cache,s=e.length,r=So(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||qf,r[a])}function P1(t,e,n){let i=this.cache,s=e.length,r=So(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Xf,r[a])}function I1(t){switch(t){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return v1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return b1;case 35668:case 35672:return M1;case 35669:case 35673:return A1;case 5125:return _1;case 36294:return w1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return P1}}var bc=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=f1(n.type)}},Mc=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I1(n.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},El=/(\w+)(\])?(\[|\.)?/g;function lf(t,e){t.seq.push(e),t.map[e.id]=e}function U1(t,e,n){let i=t.name,s=i.length;for(El.lastIndex=0;;){let r=El.exec(i),a=El.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lf(n,c===void 0?new bc(o,t,e):new Mc(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new Ac(o),lf(n,u)),n=u}}}var $s=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);U1(r,a,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function cf(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var B1=37297,L1=0;function N1(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var uf=new We;function F1(t){ut._getMatrix(uf,ut.workingColorSpace,t);let e=`mat3( ${uf.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case yo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hf(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+N1(t.getShaderSource(e),a)}else return s}function O1(t,e){let n=F1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function k1(t,e){let n;switch(e){case Jp:n="Linear";break;case jp:n="Reinhard";break;case $p:n="Cineon";break;case e0:n="ACESFilmic";break;case n0:n="AgX";break;case i0:n="Neutral";break;case t0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Fa=new B;function H1(){ut.getLuminanceCoefficients(Fa);let t=Fa.x.toFixed(4),e=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function G1(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function V1(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Nr(t){return t!==""}function ff(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(t){return t.replace(W1,Y1)}var X1=new Map;function Y1(t,e){let n=Ke[e];if(n===void 0){let i=X1.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _c(n)}var q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(t){return t.replace(q1,K1)}function K1(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Z1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===nr&&(e="ENVMAP_MODE_REFRACTION"),e}function j1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Qp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function $1(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ex(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=Q1(n),c=Z1(n),h=J1(n),u=j1(n),f=$1(n),d=z1(n),g=G1(r),x=s.createProgram(),m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[mf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[mf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ni?"#define TONE_MAPPING":"",n.toneMapping!==ni?Ke.tonemapping_pars_fragment:"",n.toneMapping!==ni?k1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,O1("linearToOutputTexel",n.outputColorSpace),H1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nr).join(`
`)),a=_c(a),a=ff(a,n),a=df(a,n),o=_c(o),o=ff(o,n),o=df(o,n),a=pf(a),o=pf(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+a,M=y+p+o,D=cf(s,s.VERTEX_SHADER,S),A=cf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,D),s.attachShader(x,A),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(R){if(t.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(A).trim(),X=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,D,A);else{let $=hf(s,D,"vertex"),Y=hf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+$+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||V==="")&&(W=!1);W&&(R.diagnostics={runnable:X,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(D),s.deleteShader(A),P=new $s(s,x),w=V1(s,x)}let P;this.getUniforms=function(){return P===void 0&&v(this),P};let w;this.getAttributes=function(){return w===void 0&&v(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,B1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=A,this}var tx=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Ec(e),n.set(e,i)),i}},Ec=class{constructor(e){this.id=tx++,this.code=e,this.usedTimes=0}};function nx(t,e,n,i,s,r,a){let o=new eo,l=new wc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,R,U,k){let V=U.fog,X=k.geometry,W=w.isMeshStandardMaterial?U.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),Y=$&&$.mapping===xo?$.image.height:null,se=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=de!==void 0?de.length:0,ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let Ze,Z,re,ie;if(se){let At=ei[se];Ze=At.vertexShader,Z=At.fragmentShader}else Ze=w.vertexShader,Z=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),ie=l.getFragmentShaderID(w);let ee=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Se=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,ft=!!w.map,nt=!!w.matcap,bt=!!$,O=!!w.aoMap,Dt=!!w.lightMap,we=!!w.bumpMap,qe=!!w.normalMap,Ie=!!w.displacementMap,Mt=!!w.emissiveMap,ae=!!w.metalnessMap,C=!!w.roughnessMap,_=w.anisotropy>0,T=w.clearcoat>0,I=w.dispersion>0,H=w.iridescence>0,q=w.sheen>0,ue=w.transmission>0,ce=_&&!!w.anisotropyMap,me=T&&!!w.clearcoatMap,it=T&&!!w.clearcoatNormalMap,oe=T&&!!w.clearcoatRoughnessMap,Me=H&&!!w.iridescenceMap,Fe=H&&!!w.iridescenceThicknessMap,ke=q&&!!w.sheenColorMap,Ae=q&&!!w.sheenRoughnessMap,lt=!!w.specularMap,$e=!!w.specularColorMap,Tt=!!w.specularIntensityMap,N=ue&&!!w.transmissionMap,ge=ue&&!!w.thicknessMap,J=!!w.gradientMap,ne=!!w.alphaMap,ye=w.alphaTest>0,ve=!!w.alphaHash,Je=!!w.extensions,Ht=ni;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ht=t.toneMapping);let hn={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:Z,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:Se,instancingColor:Se&&k.instanceColor!==null,instancingMorph:Se&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ai,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:nt,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:Dt,bumpMap:we,normalMap:qe,displacementMap:f&&Ie,emissiveMap:Mt,normalMapObjectSpace:qe&&w.normalMapType===r0,normalMapTangentSpace:qe&&w.normalMapType===Of,metalnessMap:ae,roughnessMap:C,anisotropy:_,anisotropyMap:ce,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:it,clearcoatRoughnessMap:oe,dispersion:I,iridescence:H,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:q,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:lt,specularColorMap:$e,specularIntensityMap:Tt,transmission:ue,transmissionMap:N,thicknessMap:ge,gradientMap:J,opaque:w.transparent===!1&&w.blending===Zs&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:ye,alphaHash:ve,combine:w.combine,mapUv:ft&&x(w.map.channel),aoMapUv:O&&x(w.aoMap.channel),lightMapUv:Dt&&x(w.lightMap.channel),bumpMapUv:we&&x(w.bumpMap.channel),normalMapUv:qe&&x(w.normalMap.channel),displacementMapUv:Ie&&x(w.displacementMap.channel),emissiveMapUv:Mt&&x(w.emissiveMap.channel),metalnessMapUv:ae&&x(w.metalnessMap.channel),roughnessMapUv:C&&x(w.roughnessMap.channel),anisotropyMapUv:ce&&x(w.anisotropyMap.channel),clearcoatMapUv:me&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(w.sheenRoughnessMap.channel),specularMapUv:lt&&x(w.specularMap.channel),specularColorMapUv:$e&&x(w.specularColorMap.channel),specularIntensityMapUv:Tt&&x(w.specularIntensityMap.channel),transmissionMapUv:N&&x(w.transmissionMap.channel),thicknessMapUv:ge&&x(w.thicknessMap.channel),alphaMapUv:ne&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qe||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(ft||ne),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&ut.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:Mt&&w.emissiveMap.isVideoTexture===!0&&ut.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gt,flipSided:w.side===Vt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return hn.vertexUv1s=c.has(1),hn.vertexUv2s=c.has(2),hn.vertexUv3s=c.has(3),c.clear(),hn}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let R in w.defines)b.push(R),b.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(b,w),S(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){let b=g[w.type],R;if(b){let U=ei[b];R=Y0.clone(U.uniforms)}else R=w.uniforms;return R}function D(w,b){let R;for(let U=0,k=h.length;U<k;U++){let V=h[U];if(V.cacheKey===b){R=V,++R.usedTimes;break}}return R===void 0&&(R=new ex(t,b,w,r),h.push(R)),R}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function v(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:v,programs:h,dispose:P}}function ix(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function sx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vf(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u,f,d,g,x,m){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},t[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(u,f){n.length>1&&n.sort(u||sx),i.length>1&&i.sort(f||gf),s.length>1&&s.sort(f||gf)}function h(){for(let u=e,f=t.length;u<f;u++){let d=t[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function rx(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new vf,t.set(i,[a])):s>=r.length?(a=new vf,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ax(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Te};break;case"SpotLight":n={position:new B,direction:new B,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":n={color:new Te,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function ox(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var lx=0;function cx(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ux(t){let e=new ax,n=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new wt,a=new wt;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,S=0,M=0,D=0,A=0,v=0;c.sort(cx);for(let w=0,b=c.length;w<b;w++){let R=c[w],U=R.color,k=R.intensity,V=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*k,u+=U.g*k,f+=U.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],k);v++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,Y=n.get(R);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=R.shadow.matrix,y++}i.directional[d]=W,d++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=V,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[x]=W;let $=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,$.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,R.castShadow){let Y=n.get(R);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=X,M++}x++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let $=R.shadow,Y=n.get(R);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=W,g++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==D||P.numLightProbes!==v)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=v,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=D,P.numLightProbes=v,i.version=lx++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let S=c[p];if(S.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function xf(t){let e=new ux(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hx(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new xf(t),e.set(s,[o])):r>=a.length?(o=new xf(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Yr=class extends On{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ui,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function px(t,e,n){let i=new Xr,s=new fe,r=new fe,a=new Et,o=new Yr({depthPacking:cu}),l=new Tc,c={},h=n.maxTextureSize,u={[ii]:Vt,[Vt]:ii,[Gt]:Gt},f=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:fx,fragmentShader:dx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let p=this.type;this.render=function(A,v,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=t.getRenderTarget(),b=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),U=t.state;U.setBlending(zt),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==Ei&&this.type===Ei,V=p===Ei&&this.type!==Ei;for(let X=0,W=A.length;X<W;X++){let $=A[X],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let se=Y.getFrameExtents();if(s.multiply(se),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||V===!0){let Ee=this.type!==Ei?{minFilter:Wt,magFilter:Wt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ht(s.x,s.y,Ee),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();let de=Y.getViewportCount();for(let Ee=0;Ee<de;Ee++){let ze=Y.getViewport(Ee);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),U.viewport(a),Y.updateMatrices($,Ee),i=Y.getFrustum(),M(v,P,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Ei&&y(Y,P),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(w,b,R)};function y(A,v){let P=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ht(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(v,null,P,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(v,null,P,d,x,null)}function S(A,v,P,w){let b=null,R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let U=b.uuid,k=v.uuid,V=c[U];V===void 0&&(V={},c[U]=V);let X=V[k];X===void 0&&(X=b.clone(),V[k]=X,v.addEventListener("dispose",D)),b=X}if(b.visible=v.visible,b.wireframe=v.wireframe,w===Ei?b.side=v.shadowSide!==null?v.shadowSide:v.side:b.side=v.shadowSide!==null?v.shadowSide:u[v.side],b.alphaMap=v.alphaMap,b.alphaTest=v.alphaTest,b.map=v.map,b.clipShadows=v.clipShadows,b.clippingPlanes=v.clippingPlanes,b.clipIntersection=v.clipIntersection,b.displacementMap=v.displacementMap,b.displacementScale=v.displacementScale,b.displacementBias=v.displacementBias,b.wireframeLinewidth=v.wireframeLinewidth,b.linewidth=v.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=t.properties.get(b);U.light=P}return b}function M(A,v,P,w,b){if(A.visible===!1)return;if(A.layers.test(v.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ei)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let k=e.update(A),V=A.material;if(Array.isArray(V)){let X=k.groups;for(let W=0,$=X.length;W<$;W++){let Y=X[W],se=V[Y.materialIndex];if(se&&se.visible){let de=S(A,se,w,b);A.onBeforeShadow(t,A,v,P,k,de,Y),t.renderBufferDirect(P,null,k,de,A,Y),A.onAfterShadow(t,A,v,P,k,de,Y)}}}else if(V.visible){let X=S(A,V,w,b);A.onBeforeShadow(t,A,v,P,k,X,null),t.renderBufferDirect(P,null,k,X,A,null),A.onAfterShadow(t,A,v,P,k,X,null)}}let U=A.children;for(let k=0,V=U.length;k<V;k++)M(U[k],v,P,w,b)}function D(A){A.target.removeEventListener("dispose",D);for(let P in c){let w=c[P],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var mx={[Ul]:Bl,[Ll]:Ol,[Nl]:kl,[er]:Fl,[Bl]:Ul,[Ol]:Ll,[kl]:Nl,[Fl]:er};function gx(t,e){function n(){let N=!1,ge=new Et,J=null,ne=new Et(0,0,0,0);return{setMask:function(ye){J!==ye&&!N&&(t.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){N=ye},setClear:function(ye,ve,Je,Ht,hn){hn===!0&&(ye*=Ht,ve*=Ht,Je*=Ht),ge.set(ye,ve,Je,Ht),ne.equals(ge)===!1&&(t.clearColor(ye,ve,Je,Ht),ne.copy(ge))},reset:function(){N=!1,J=null,ne.set(-1,0,0,0)}}}function i(){let N=!1,ge=!1,J=null,ne=null,ye=null;return{setReversed:function(ve){if(ge!==ve){let Je=e.get("EXT_clip_control");ge?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let Ht=ye;ye=null,this.setClear(Ht)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?ee(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(ve){J!==ve&&!N&&(t.depthMask(ve),J=ve)},setFunc:function(ve){if(ge&&(ve=mx[ve]),ne!==ve){switch(ve){case Ul:t.depthFunc(t.NEVER);break;case Bl:t.depthFunc(t.ALWAYS);break;case Ll:t.depthFunc(t.LESS);break;case er:t.depthFunc(t.LEQUAL);break;case Nl:t.depthFunc(t.EQUAL);break;case Fl:t.depthFunc(t.GEQUAL);break;case Ol:t.depthFunc(t.GREATER);break;case kl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ve}},setLocked:function(ve){N=ve},setClear:function(ve){ye!==ve&&(ge&&(ve=1-ve),t.clearDepth(ve),ye=ve)},reset:function(){N=!1,J=null,ne=null,ye=null,ge=!1}}}function s(){let N=!1,ge=null,J=null,ne=null,ye=null,ve=null,Je=null,Ht=null,hn=null;return{setTest:function(At){N||(At?ee(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(At){ge!==At&&!N&&(t.stencilMask(At),ge=At)},setFunc:function(At,zn,yi){(J!==At||ne!==zn||ye!==yi)&&(t.stencilFunc(At,zn,yi),J=At,ne=zn,ye=yi)},setOp:function(At,zn,yi){(ve!==At||Je!==zn||Ht!==yi)&&(t.stencilOp(At,zn,yi),ve=At,Je=zn,Ht=yi)},setLocked:function(At){N=At},setClear:function(At){hn!==At&&(t.clearStencil(At),hn=At)},reset:function(){N=!1,ge=null,J=null,ne=null,ye=null,ve=null,Je=null,Ht=null,hn=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,S=null,M=null,D=null,A=null,v=new Te(0,0,0),P=0,w=!1,b=null,R=null,U=null,k=null,V=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,$=0,Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=$>=2);let se=null,de={},Ee=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Ze=new Et().fromArray(Ee),Z=new Et().fromArray(ze);function re(N,ge,J,ne){let ye=new Uint8Array(4),ve=t.createTexture();t.bindTexture(N,ve),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<J;Je++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ge+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ve}let ie={};ie[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(er),we(!1),qe(xh),ee(t.CULL_FACE),O(zt);function ee(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Ne(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Se(N,ge){return u[N]!==ge?(t.bindFramebuffer(N,ge),u[N]=ge,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(N,ge){let J=d,ne=!1;if(N){J=f.get(ge),J===void 0&&(J=[],f.set(ge,J));let ye=N.textures;if(J.length!==ye.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Je=ye.length;ve<Je;ve++)J[ve]=t.COLOR_ATTACHMENT0+ve;J.length=ye.length,ne=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ne=!0);ne&&t.drawBuffers(J)}function ft(N){return g!==N?(t.useProgram(N),g=N,!0):!1}let nt={[ps]:t.FUNC_ADD,[Ip]:t.FUNC_SUBTRACT,[Up]:t.FUNC_REVERSE_SUBTRACT};nt[Bp]=t.MIN,nt[Lp]=t.MAX;let bt={[Np]:t.ZERO,[Fp]:t.ONE,[Op]:t.SRC_COLOR,[Pl]:t.SRC_ALPHA,[Wp]:t.SRC_ALPHA_SATURATE,[Gp]:t.DST_COLOR,[Hp]:t.DST_ALPHA,[kp]:t.ONE_MINUS_SRC_COLOR,[Il]:t.ONE_MINUS_SRC_ALPHA,[Vp]:t.ONE_MINUS_DST_COLOR,[zp]:t.ONE_MINUS_DST_ALPHA,[Xp]:t.CONSTANT_COLOR,[Yp]:t.ONE_MINUS_CONSTANT_COLOR,[qp]:t.CONSTANT_ALPHA,[Kp]:t.ONE_MINUS_CONSTANT_ALPHA};function O(N,ge,J,ne,ye,ve,Je,Ht,hn,At){if(N===zt){x===!0&&(Ne(t.BLEND),x=!1);return}if(x===!1&&(ee(t.BLEND),x=!0),N!==Pp){if(N!==m||At!==w){if((p!==ps||M!==ps)&&(t.blendEquation(t.FUNC_ADD),p=ps,M=ps),At)switch(N){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yh:t.blendFunc(t.ONE,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,S=null,D=null,A=null,v.set(0,0,0),P=0,m=N,w=At}return}ye=ye||ge,ve=ve||J,Je=Je||ne,(ge!==p||ye!==M)&&(t.blendEquationSeparate(nt[ge],nt[ye]),p=ge,M=ye),(J!==y||ne!==S||ve!==D||Je!==A)&&(t.blendFuncSeparate(bt[J],bt[ne],bt[ve],bt[Je]),y=J,S=ne,D=ve,A=Je),(Ht.equals(v)===!1||hn!==P)&&(t.blendColor(Ht.r,Ht.g,Ht.b,hn),v.copy(Ht),P=hn),m=N,w=!1}function Dt(N,ge){N.side===Gt?Ne(t.CULL_FACE):ee(t.CULL_FACE);let J=N.side===Vt;ge&&(J=!J),we(J),N.blending===Zs&&N.transparent===!1?O(zt):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ne=N.stencilWrite;o.setTest(ne),ne&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){b!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),b=N)}function qe(N){N!==Rp?(ee(t.CULL_FACE),N!==R&&(N===xh?t.cullFace(t.BACK):N===Dp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),R=N}function Ie(N){N!==U&&(W&&t.lineWidth(N),U=N)}function Mt(N,ge,J){N?(ee(t.POLYGON_OFFSET_FILL),(k!==ge||V!==J)&&(t.polygonOffset(ge,J),k=ge,V=J)):Ne(t.POLYGON_OFFSET_FILL)}function ae(N){N?ee(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function C(N){N===void 0&&(N=t.TEXTURE0+X-1),se!==N&&(t.activeTexture(N),se=N)}function _(N,ge,J){J===void 0&&(se===null?J=t.TEXTURE0+X-1:J=se);let ne=de[J];ne===void 0&&(ne={type:void 0,texture:void 0},de[J]=ne),(ne.type!==N||ne.texture!==ge)&&(se!==J&&(t.activeTexture(J),se=J),t.bindTexture(N,ge||ie[N]),ne.type=N,ne.texture=ge)}function T(){let N=de[se];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function I(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){Ze.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ze.copy(N))}function Ae(N){Z.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function lt(N,ge){let J=c.get(ge);J===void 0&&(J=new WeakMap,c.set(ge,J));let ne=J.get(N);ne===void 0&&(ne=t.getUniformBlockIndex(ge,N.name),J.set(N,ne))}function $e(N,ge){let ne=c.get(ge).get(N);l.get(ge)!==ne&&(t.uniformBlockBinding(ge,ne,N.__bindingPointIndex),l.set(ge,ne))}function Tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},se=null,de={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,S=null,M=null,D=null,A=null,v=new Te(0,0,0),P=0,w=!1,b=null,R=null,U=null,k=null,V=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Ne,bindFramebuffer:Se,drawBuffers:Pe,useProgram:ft,setBlending:O,setMaterial:Dt,setFlipSided:we,setCullFace:qe,setLineWidth:Ie,setPolygonOffset:Mt,setScissorTest:ae,activeTexture:C,bindTexture:_,unbindTexture:T,compressedTexImage2D:I,compressedTexImage3D:H,texImage2D:Me,texImage3D:Fe,updateUBOMapping:lt,uniformBlockBinding:$e,texStorage2D:it,texStorage3D:oe,texSubImage2D:q,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:ke,viewport:Ae,reset:Tt}}function yf(t,e,n,i){let s=vx(i);switch(n){case If:return t*e;case Bf:return t*e;case Lf:return t*e*2;case ru:return t*e/s.components*s.byteLength;case au:return t*e/s.components*s.byteLength;case Nf:return t*e*2/s.components*s.byteLength;case ou:return t*e*2/s.components*s.byteLength;case Uf:return t*e*3/s.components*s.byteLength;case Yn:return t*e*4/s.components*s.byteLength;case lu:return t*e*4/s.components*s.byteLength;case Va:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Yl:return Math.max(t,16)*Math.max(e,8)/4;case Vl:case Xl:return Math.max(t,8)*Math.max(e,8)/2;case ql:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qa:case uc:case hc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ff:case fc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vx(t){switch(t){case Nt:case Rf:return{byteLength:1,components:1};case Vr:case Df:case ri:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case qn:case nu:case ti:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xx(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return d?new OffscreenCanvas(C,_):Za("canvas")}function x(C,_,T){let I=1,H=ae(C);if((H.width>T||H.height>T)&&(I=T/Math.max(H.width,H.height)),I<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(I*H.width),ue=Math.floor(I*H.height);u===void 0&&(u=g(q,ue));let ce=_?g(q,ue):u;return ce.width=q,ce.height=ue,ce.getContext("2d").drawImage(C,0,0,q,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+q+"x"+ue+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){t.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,_,T,I,H=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=_;if(_===t.RED&&(T===t.FLOAT&&(q=t.R32F),T===t.HALF_FLOAT&&(q=t.R16F),T===t.UNSIGNED_BYTE&&(q=t.R8)),_===t.RED_INTEGER&&(T===t.UNSIGNED_BYTE&&(q=t.R8UI),T===t.UNSIGNED_SHORT&&(q=t.R16UI),T===t.UNSIGNED_INT&&(q=t.R32UI),T===t.BYTE&&(q=t.R8I),T===t.SHORT&&(q=t.R16I),T===t.INT&&(q=t.R32I)),_===t.RG&&(T===t.FLOAT&&(q=t.RG32F),T===t.HALF_FLOAT&&(q=t.RG16F),T===t.UNSIGNED_BYTE&&(q=t.RG8)),_===t.RG_INTEGER&&(T===t.UNSIGNED_BYTE&&(q=t.RG8UI),T===t.UNSIGNED_SHORT&&(q=t.RG16UI),T===t.UNSIGNED_INT&&(q=t.RG32UI),T===t.BYTE&&(q=t.RG8I),T===t.SHORT&&(q=t.RG16I),T===t.INT&&(q=t.RG32I)),_===t.RGB_INTEGER&&(T===t.UNSIGNED_BYTE&&(q=t.RGB8UI),T===t.UNSIGNED_SHORT&&(q=t.RGB16UI),T===t.UNSIGNED_INT&&(q=t.RGB32UI),T===t.BYTE&&(q=t.RGB8I),T===t.SHORT&&(q=t.RGB16I),T===t.INT&&(q=t.RGB32I)),_===t.RGBA_INTEGER&&(T===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),T===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),T===t.UNSIGNED_INT&&(q=t.RGBA32UI),T===t.BYTE&&(q=t.RGBA8I),T===t.SHORT&&(q=t.RGBA16I),T===t.INT&&(q=t.RGBA32I)),_===t.RGB&&T===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),_===t.RGBA){let ue=H?yo:ut.getTransfer(I);T===t.FLOAT&&(q=t.RGBA32F),T===t.HALF_FLOAT&&(q=t.RGBA16F),T===t.UNSIGNED_BYTE&&(q=ue===_t?t.SRGB8_ALPHA8:t.RGBA8),T===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),T===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(C,_){let T;return C?_===null||_===qn||_===Xi?T=t.DEPTH24_STENCIL8:_===ti?T=t.DEPTH32F_STENCIL8:_===Vr&&(T=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Xi?T=t.DEPTH_COMPONENT24:_===ti?T=t.DEPTH_COMPONENT32F:_===Vr&&(T=t.DEPTH_COMPONENT16),T}function D(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function A(C){let _=C.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&h.delete(_)}function v(C){let _=C.target;_.removeEventListener("dispose",v),b(_)}function P(C){let _=i.get(C);if(_.__webglInit===void 0)return;let T=C.source,I=f.get(T);if(I){let H=I[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&w(C),Object.keys(I).length===0&&f.delete(T)}i.remove(C)}function w(C){let _=i.get(C);t.deleteTexture(_.__webglTexture);let T=C.source,I=f.get(T);delete I[_.__cacheKey],a.memory.textures--}function b(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(_.__webglFramebuffer[I]))for(let H=0;H<_.__webglFramebuffer[I].length;H++)t.deleteFramebuffer(_.__webglFramebuffer[I][H]);else t.deleteFramebuffer(_.__webglFramebuffer[I]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[I])}else{if(Array.isArray(_.__webglFramebuffer))for(let I=0;I<_.__webglFramebuffer.length;I++)t.deleteFramebuffer(_.__webglFramebuffer[I]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let I=0;I<_.__webglColorRenderbuffer.length;I++)_.__webglColorRenderbuffer[I]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[I]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let T=C.textures;for(let I=0,H=T.length;I<H;I++){let q=i.get(T[I]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(T[I])}i.remove(C)}let R=0;function U(){R=0}function k(){let C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function V(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function X(C,_){let T=i.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&T.__version!==C.version){let I=C.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(T,C,_);return}}n.bindTexture(t.TEXTURE_2D,T.__webglTexture,t.TEXTURE0+_)}function W(C,_){let T=i.get(C);if(C.version>0&&T.__version!==C.version){Z(T,C,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,T.__webglTexture,t.TEXTURE0+_)}function $(C,_){let T=i.get(C);if(C.version>0&&T.__version!==C.version){Z(T,C,_);return}n.bindTexture(t.TEXTURE_3D,T.__webglTexture,t.TEXTURE0+_)}function Y(C,_){let T=i.get(C);if(C.version>0&&T.__version!==C.version){re(T,C,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+_)}let se={[Gr]:t.REPEAT,[vs]:t.CLAMP_TO_EDGE,[Gl]:t.MIRRORED_REPEAT},de={[Wt]:t.NEAREST,[s0]:t.NEAREST_MIPMAP_NEAREST,[va]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[$o]:t.LINEAR_MIPMAP_NEAREST,[Ci]:t.LINEAR_MIPMAP_LINEAR},Ee={[a0]:t.NEVER,[f0]:t.ALWAYS,[o0]:t.LESS,[kf]:t.LEQUAL,[l0]:t.EQUAL,[h0]:t.GEQUAL,[c0]:t.GREATER,[u0]:t.NOTEQUAL};function ze(C,_){if(_.type===ti&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===$o||_.magFilter===va||_.magFilter===Ci||_.minFilter===Kt||_.minFilter===$o||_.minFilter===va||_.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,se[_.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,se[_.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,se[_.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,de[_.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==va&&_.minFilter!==Ci||_.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let T=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(C,_){let T=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",A));let I=_.source,H=f.get(I);H===void 0&&(H={},f.set(I,H));let q=V(_);if(q!==C.__cacheKey){H[q]===void 0&&(H[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,T=!0),H[q].usedTimes++;let ue=H[C.__cacheKey];ue!==void 0&&(H[C.__cacheKey].usedTimes--,ue.usedTimes===0&&w(_)),C.__cacheKey=q,C.__webglTexture=H[q].texture}return T}function Z(C,_,T){let I=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(I=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(I=t.TEXTURE_3D);let H=Ze(C,_),q=_.source;n.bindTexture(I,C.__webglTexture,t.TEXTURE0+T);let ue=i.get(q);if(q.version!==ue.__version||H===!0){n.activeTexture(t.TEXTURE0+T);let ce=ut.getPrimaries(ut.workingColorSpace),me=_.colorSpace===Nn?null:ut.getPrimaries(_.colorSpace),it=_.colorSpace===Nn||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let oe=x(_.image,!1,s.maxTextureSize);oe=Mt(_,oe);let Me=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),ke=S(_.internalFormat,Me,Fe,_.colorSpace,_.isVideoTexture);ze(I,_);let Ae,lt=_.mipmaps,$e=_.isVideoTexture!==!0,Tt=ue.__version===void 0||H===!0,N=q.dataReady,ge=D(_,oe);if(_.isDepthTexture)ke=M(_.format===Yi,_.type),Tt&&($e?n.texStorage2D(t.TEXTURE_2D,1,ke,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Me,Fe,null));else if(_.isDataTexture)if(lt.length>0){$e&&Tt&&n.texStorage2D(t.TEXTURE_2D,ge,ke,lt[0].width,lt[0].height);for(let J=0,ne=lt.length;J<ne;J++)Ae=lt[J],$e?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Me,Fe,Ae.data):n.texImage2D(t.TEXTURE_2D,J,ke,Ae.width,Ae.height,0,Me,Fe,Ae.data);_.generateMipmaps=!1}else $e?(Tt&&n.texStorage2D(t.TEXTURE_2D,ge,ke,oe.width,oe.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,Fe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Me,Fe,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&Tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,lt[0].width,lt[0].height,oe.depth);for(let J=0,ne=lt.length;J<ne;J++)if(Ae=lt[J],_.format!==Yn)if(Me!==null)if($e){if(N)if(_.layerUpdates.size>0){let ye=yf(Ae.width,Ae.height,_.format,_.type);for(let ve of _.layerUpdates){let Je=Ae.data.subarray(ve*ye/Ae.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ve,Ae.width,Ae.height,1,Me,Je)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,oe.depth,Me,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ke,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,oe.depth,Me,Fe,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,ke,Ae.width,Ae.height,oe.depth,0,Me,Fe,Ae.data)}else{$e&&Tt&&n.texStorage2D(t.TEXTURE_2D,ge,ke,lt[0].width,lt[0].height);for(let J=0,ne=lt.length;J<ne;J++)Ae=lt[J],_.format!==Yn?Me!==null?$e?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Me,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,J,ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Me,Fe,Ae.data):n.texImage2D(t.TEXTURE_2D,J,ke,Ae.width,Ae.height,0,Me,Fe,Ae.data)}else if(_.isDataArrayTexture)if($e){if(Tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,oe.width,oe.height,oe.depth),N)if(_.layerUpdates.size>0){let J=yf(oe.width,oe.height,_.format,_.type);for(let ne of _.layerUpdates){let ye=oe.data.subarray(ne*J/oe.data.BYTES_PER_ELEMENT,(ne+1)*J/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Me,Fe,ye)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Fe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,Me,Fe,oe.data);else if(_.isData3DTexture)$e?(Tt&&n.texStorage3D(t.TEXTURE_3D,ge,ke,oe.width,oe.height,oe.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Fe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,Me,Fe,oe.data);else if(_.isFramebufferTexture){if(Tt)if($e)n.texStorage2D(t.TEXTURE_2D,ge,ke,oe.width,oe.height);else{let J=oe.width,ne=oe.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,ke,J,ne,0,Me,Fe,null),J>>=1,ne>>=1}}else if(lt.length>0){if($e&&Tt){let J=ae(lt[0]);n.texStorage2D(t.TEXTURE_2D,ge,ke,J.width,J.height)}for(let J=0,ne=lt.length;J<ne;J++)Ae=lt[J],$e?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Me,Fe,Ae):n.texImage2D(t.TEXTURE_2D,J,ke,Me,Fe,Ae);_.generateMipmaps=!1}else if($e){if(Tt){let J=ae(oe);n.texStorage2D(t.TEXTURE_2D,ge,ke,J.width,J.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Fe,oe)}else n.texImage2D(t.TEXTURE_2D,0,ke,Me,Fe,oe);m(_)&&p(I),ue.__version=q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function re(C,_,T){if(_.image.length!==6)return;let I=Ze(C,_),H=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+T);let q=i.get(H);if(H.version!==q.__version||I===!0){n.activeTexture(t.TEXTURE0+T);let ue=ut.getPrimaries(ut.workingColorSpace),ce=_.colorSpace===Nn?null:ut.getPrimaries(_.colorSpace),me=_.colorSpace===Nn||ue===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let it=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let ne=0;ne<6;ne++)!it&&!oe?Me[ne]=x(_.image[ne],!0,s.maxCubemapSize):Me[ne]=oe?_.image[ne].image:_.image[ne],Me[ne]=Mt(_,Me[ne]);let Fe=Me[0],ke=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type),lt=S(_.internalFormat,ke,Ae,_.colorSpace),$e=_.isVideoTexture!==!0,Tt=q.__version===void 0||I===!0,N=H.dataReady,ge=D(_,Fe);ze(t.TEXTURE_CUBE_MAP,_);let J;if(it){$e&&Tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,lt,Fe.width,Fe.height);for(let ne=0;ne<6;ne++){J=Me[ne].mipmaps;for(let ye=0;ye<J.length;ye++){let ve=J[ye];_.format!==Yn?ke!==null?$e?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,ve.width,ve.height,ke,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,lt,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,ve.width,ve.height,ke,Ae,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,lt,ve.width,ve.height,0,ke,Ae,ve.data)}}}else{if(J=_.mipmaps,$e&&Tt){J.length>0&&ge++;let ne=ae(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,lt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Me[ne].width,Me[ne].height,ke,Ae,Me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,lt,Me[ne].width,Me[ne].height,0,ke,Ae,Me[ne].data);for(let ye=0;ye<J.length;ye++){let Je=J[ye].image[ne].image;$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,Je.width,Je.height,ke,Ae,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,lt,Je.width,Je.height,0,ke,Ae,Je.data)}}else{$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ke,Ae,Me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,lt,ke,Ae,Me[ne]);for(let ye=0;ye<J.length;ye++){let ve=J[ye];$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,ke,Ae,ve.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,lt,ke,Ae,ve.image[ne])}}}m(_)&&p(t.TEXTURE_CUBE_MAP),q.__version=H.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ie(C,_,T,I,H,q){let ue=r.convert(T.format,T.colorSpace),ce=r.convert(T.type),me=S(T.internalFormat,ue,ce,T.colorSpace),it=i.get(_),oe=i.get(T);if(oe.__renderTarget=_,!it.__hasExternalTextures){let Me=Math.max(1,_.width>>q),Fe=Math.max(1,_.height>>q);H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?n.texImage3D(H,q,me,Me,Fe,_.depth,0,ue,ce,null):n.texImage2D(H,q,me,Me,Fe,0,ue,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,I,H,oe.__webglTexture,0,we(_)):(H===t.TEXTURE_2D||H>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,I,H,oe.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(C,_,T){if(t.bindRenderbuffer(t.RENDERBUFFER,C),_.depthBuffer){let I=_.depthTexture,H=I&&I.isDepthTexture?I.type:null,q=M(_.stencilBuffer,H),ue=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=we(_);qe(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,q,_.width,_.height):T?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,q,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,q,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,C)}else{let I=_.textures;for(let H=0;H<I.length;H++){let q=I[H],ue=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),me=S(q.internalFormat,ue,ce,q.colorSpace),it=we(_);T&&qe(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,it,me,_.width,_.height):qe(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it,me,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,me,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=i.get(_.depthTexture);I.__renderTarget=_,(!I.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let H=I.__webglTexture,q=we(_);if(_.depthTexture.format===Js)qe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,H,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,H,0);else if(_.depthTexture.format===Yi)qe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,H,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Se(C){let _=i.get(C),T=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let I=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),I){let H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,I.removeEventListener("dispose",H)};I.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=I}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");Ne(_.__webglFramebuffer,C)}else if(T){_.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[I]),_.__webglDepthbuffer[I]===void 0)_.__webglDepthbuffer[I]=t.createRenderbuffer(),ee(_.__webglDepthbuffer[I],C,!1);else{let H=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[I];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ee(_.__webglDepthbuffer,C,!1);else{let I=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,H)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(C,_,T){let I=i.get(C);_!==void 0&&ie(I.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),T!==void 0&&Se(C)}function ft(C){let _=C.texture,T=i.get(C),I=i.get(_);C.addEventListener("dispose",v);let H=C.textures,q=C.isWebGLCubeRenderTarget===!0,ue=H.length>1;if(ue||(I.__webglTexture===void 0&&(I.__webglTexture=t.createTexture()),I.__version=_.version,a.memory.textures++),q){T.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){T.__webglFramebuffer[ce]=[];for(let me=0;me<_.mipmaps.length;me++)T.__webglFramebuffer[ce][me]=t.createFramebuffer()}else T.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){T.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)T.__webglFramebuffer[ce]=t.createFramebuffer()}else T.__webglFramebuffer=t.createFramebuffer();if(ue)for(let ce=0,me=H.length;ce<me;ce++){let it=i.get(H[ce]);it.__webglTexture===void 0&&(it.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&qe(C)===!1){T.__webglMultisampledFramebuffer=t.createFramebuffer(),T.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let ce=0;ce<H.length;ce++){let me=H[ce];T.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,T.__webglColorRenderbuffer[ce]);let it=r.convert(me.format,me.colorSpace),oe=r.convert(me.type),Me=S(me.internalFormat,it,oe,me.colorSpace,C.isXRRenderTarget===!0),Fe=we(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Me,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,T.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(T.__webglDepthRenderbuffer=t.createRenderbuffer(),ee(T.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture),ze(t.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)ie(T.__webglFramebuffer[ce][me],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ie(T.__webglFramebuffer[ce],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ce=0,me=H.length;ce<me;ce++){let it=H[ce],oe=i.get(it);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ze(t.TEXTURE_2D,it),ie(T.__webglFramebuffer,C,it,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(it)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,I.__webglTexture),ze(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)ie(T.__webglFramebuffer[me],C,_,t.COLOR_ATTACHMENT0,ce,me);else ie(T.__webglFramebuffer,C,_,t.COLOR_ATTACHMENT0,ce,0);m(_)&&p(ce),n.unbindTexture()}C.depthBuffer&&Se(C)}function nt(C){let _=C.textures;for(let T=0,I=_.length;T<I;T++){let H=_[T];if(m(H)){let q=y(C),ue=i.get(H).__webglTexture;n.bindTexture(q,ue),p(q),n.unbindTexture()}}}let bt=[],O=[];function Dt(C){if(C.samples>0){if(qe(C)===!1){let _=C.textures,T=C.width,I=C.height,H=t.COLOR_BUFFER_BIT,q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(C),ce=_.length>1;if(ce)for(let me=0;me<_.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let me=0;me<_.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(H|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(H|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let it=i.get(_[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,it,0)}t.blitFramebuffer(0,0,T,I,0,0,T,I,H,t.NEAREST),l===!0&&(bt.length=0,O.length=0,bt.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(q),O.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<_.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let it=i.get(_[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,it,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function we(C){return Math.min(s.maxSamples,C.samples)}function qe(C){let _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ie(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Mt(C,_){let T=C.colorSpace,I=C.format,H=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||T!==ai&&T!==Nn&&(ut.getTransfer(T)===_t?(I!==Yn||H!==Nt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),_}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=Pe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=qe}function yx(t,e){function n(i,s=Nn){let r,a=ut.getTransfer(s);if(i===Nt)return t.UNSIGNED_BYTE;if(i===iu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===su)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Rf)return t.BYTE;if(i===Df)return t.SHORT;if(i===Vr)return t.UNSIGNED_SHORT;if(i===nu)return t.INT;if(i===qn)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===ri)return t.HALF_FLOAT;if(i===If)return t.ALPHA;if(i===Uf)return t.RGB;if(i===Yn)return t.RGBA;if(i===Bf)return t.LUMINANCE;if(i===Lf)return t.LUMINANCE_ALPHA;if(i===Js)return t.DEPTH_COMPONENT;if(i===Yi)return t.DEPTH_STENCIL;if(i===ru)return t.RED;if(i===au)return t.RED_INTEGER;if(i===Nf)return t.RG;if(i===ou)return t.RG_INTEGER;if(i===lu)return t.RGBA_INTEGER;if(i===Va||i===Wa||i===Xa||i===Ya)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Wl||i===Xl||i===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===Kl||i===Ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ql||i===Kl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ql)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zl||i===Jl||i===jl||i===$l||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===uc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===qa)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ff||i===fc||i===dc||i===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xi?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Cc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sx={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let s=new tn,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new gt({vertexShader:bx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Le(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends An{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Rc,m=n.getContextAttributes(),p=null,y=null,S=[],M=[],D=new fe,A=null,v=new on;v.viewport=new Et;let P=new on;P.viewport=new Et;let w=[v,P],b=new Cc,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=S[Z];return re===void 0&&(re=new kr,S[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=S[Z];return re===void 0&&(re=new kr,S[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=S[Z];return re===void 0&&(re=new kr,S[Z]=re),re.getHandSpace()};function k(Z){let re=M.indexOf(Z.inputSource);if(re===-1)return;let ie=S[re];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,c||a),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let Z=0;Z<S.length;Z++){let re=M[Z];re!==null&&(M[Z]=null,S[Z].disconnect(re))}R=null,U=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ht(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:Nt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ie=null,ee=null;m.depth&&(ee=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Yi:Js,ie=m.stencil?Xi:qn);let Ne={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(s,n),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ht(f.textureWidth,f.textureHeight,{format:Yn,type:Nt,depthTexture:new Ki(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Z){for(let re=0;re<Z.removed.length;re++){let ie=Z.removed[re],ee=M.indexOf(ie);ee>=0&&(M[ee]=null,S[ee].disconnect(ie))}for(let re=0;re<Z.added.length;re++){let ie=Z.added[re],ee=M.indexOf(ie);if(ee===-1){for(let Se=0;Se<S.length;Se++)if(Se>=M.length){M.push(ie),ee=Se;break}else if(M[Se]===null){M[Se]=ie,ee=Se;break}if(ee===-1)break}let Ne=S[ee];Ne&&Ne.connect(ie)}}let W=new B,$=new B;function Y(Z,re,ie){W.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(ie.matrixWorld);let ee=W.distanceTo($),Ne=re.projectionMatrix.elements,Se=ie.projectionMatrix.elements,Pe=Ne[14]/(Ne[10]-1),ft=Ne[14]/(Ne[10]+1),nt=(Ne[9]+1)/Ne[5],bt=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],Dt=(Se[8]+1)/Se[0],we=Pe*O,qe=Pe*Dt,Ie=ee/(-O+Dt),Mt=Ie*-O;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let ae=Pe+Ie,C=ft+Ie,_=we-Mt,T=qe+(ee-Mt),I=nt*ft/C*ae,H=bt*ft/C*ae;Z.projectionMatrix.makePerspective(_,T,I,H,ae,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,ie=Z.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(ie=x.depthFar)),b.near=P.near=v.near=re,b.far=P.far=v.far=ie,(R!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,U=b.far),v.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,b.layers.mask=v.layers.mask|P.layers.mask;let ee=Z.parent,Ne=b.cameras;se(b,ee);for(let Se=0;Se<Ne.length;Se++)se(Ne[Se],ee);Ne.length===2?Y(b,v,P):b.projectionMatrix.copy(v.projectionMatrix),de(Z,b,ee)};function de(Z,re,ie){ie===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Ee=null;function ze(Z,re){if(h=re.getViewerPose(c||a),g=re,h!==null){let ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ee=!1;ie.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let Se=0;Se<ie.length;Se++){let Pe=ie[Se],ft=null;if(d!==null)ft=d.getViewport(Pe);else{let bt=u.getViewSubImage(f,Pe);ft=bt.viewport,Se===0&&(e.setRenderTargetTextures(y,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(y))}let nt=w[Se];nt===void 0&&(nt=new on,nt.layers.enable(Se),nt.viewport=new Et,w[Se]=nt),nt.matrix.fromArray(Pe.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Pe.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ft.x,ft.y,ft.width,ft.height),Se===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ee===!0&&b.cameras.push(nt)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let Se=u.getDepthInformation(ie[0]);Se&&Se.isValid&&Se.texture&&x.init(e,Se,s.renderState)}}for(let ie=0;ie<S.length;ie++){let ee=M[ie],Ne=S[ie];ee!==null&&Ne!==void 0&&Ne.update(ee,re,c||a)}Ee&&Ee(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let Ze=new Vf;Ze.setAnimationLoop(ze),this.setAnimationLoop=function(Z){Ee=Z},this.dispose=function(){}}},fs=new Fn,Ax=new wt;function _x(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gf(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,fs.copy(M),fs.x*=-1,fs.y*=-1,fs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(fs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wx(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let D=S.program;i.updateUBOMapping(y,D);let A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let S=u();y.__bindingPointIndex=S;let M=t.createBuffer(),D=y.__size,A=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,D,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=s[y.id],M=y.uniforms,D=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let A=0,v=M.length;A<v;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,b=P.length;w<b;w++){let R=P[w];if(d(R,A,w,D)===!0){let U=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],V=0;for(let X=0;X<k.length;X++){let W=k[X],$=x(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,U+V,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(y,S,M,D){let A=y.value,v=S+"_"+M;if(D[v]===void 0)return typeof A=="number"||typeof A=="boolean"?D[v]=A:D[v]=A.clone(),!0;{let P=D[v];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[v]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){let S=y.uniforms,M=0,D=16;for(let v=0,P=S.length;v<P;v++){let w=Array.isArray(S[v])?S[v]:[S[v]];for(let b=0,R=w.length;b<R;b++){let U=w[b],k=Array.isArray(U.value)?U.value:[U.value];for(let V=0,X=k.length;V<X;V++){let W=k[V],$=x(W),Y=M%D,se=Y%$.boundary,de=Y+se;M+=se,de!==0&&D-de<$.storage&&(M+=D-de),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=$.storage}}}let A=M%D;return A>0&&(M+=D-A),y.__size=M,y.__cache={},this}function x(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let y in s)t.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ro=class{constructor(e={}){let{canvas:n=R0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this.toneMapping=ni,this.toneMappingExposure=1;let M=this,D=!1,A=0,v=0,P=null,w=-1,b=null,R=new Et,U=new Et,k=null,V=new Te(0),X=0,W=n.width,$=n.height,Y=1,se=null,de=null,Ee=new Et(0,0,W,$),ze=new Et(0,0,W,$),Ze=!1,Z=new Xr,re=!1,ie=!1,ee=new wt,Ne=new wt,Se=new B,Pe=new Et,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function bt(){return P===null?Y:1}let O=i;function Dt(E,z){return n.getContext(E,z)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r170"),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",ve,!1),O===null){let z="webgl2";if(O=Dt(z,E),O===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let we,qe,Ie,Mt,ae,C,_,T,I,H,q,ue,ce,me,it,oe,Me,Fe,ke,Ae,lt,$e,Tt,N;function ge(){we=new zv(O),we.init(),$e=new yx(O,we),qe=new Lv(O,we,e,$e),Ie=new gx(O,we),qe.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),Mt=new Wv(O),ae=new ix,C=new xx(O,we,Ie,ae,qe,$e,Mt),_=new Fv(M),T=new Hv(M),I=new J0(O),Tt=new Uv(O,I),H=new Gv(O,I,Mt,Tt),q=new Yv(O,H,I,Mt),ke=new Xv(O,qe,C),oe=new Nv(ae),ue=new nx(M,_,T,we,qe,Tt,oe),ce=new _x(M,ae),me=new rx,it=new hx(we),Fe=new Iv(M,_,T,Ie,q,d,l),Me=new px(M,q,qe),N=new wx(O,Mt,qe,Ie),Ae=new Bv(O,we,Mt),lt=new Vv(O,we,Mt),Mt.programs=ue.programs,M.capabilities=qe,M.extensions=we,M.properties=ae,M.renderLists=me,M.shadowMap=Me,M.state=Ie,M.info=Mt}ge();let J=new Dc(M,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=we.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=we.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(W,$,!1))},this.getSize=function(E){return E.set(W,$)},this.setSize=function(E,z,K=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,$=z,n.width=Math.floor(E*Y),n.height=Math.floor(z*Y),K===!0&&(n.style.width=E+"px",n.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(W*Y,$*Y).floor()},this.setDrawingBufferSize=function(E,z,K){W=E,$=z,Y=K,n.width=Math.floor(E*K),n.height=Math.floor(z*K),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,z,K,Q){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,z,K,Q),Ie.viewport(R.copy(Ee).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,z,K,Q){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,z,K,Q),Ie.scissor(U.copy(ze).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){Ie.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(E=!0,z=!0,K=!0){let Q=0;if(E){let G=!1;if(P!==null){let le=P.texture.format;G=le===lu||le===ou||le===au}if(G){let le=P.texture.type,xe=le===Nt||le===qn||le===Vr||le===Xi||le===iu||le===su,Ce=Fe.getClearColor(),Re=Fe.getClearAlpha(),Ge=Ce.r,je=Ce.g,De=Ce.b;xe?(g[0]=Ge,g[1]=je,g[2]=De,g[3]=Re,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Ge,x[1]=je,x[2]=De,x[3]=Re,O.clearBufferiv(O.COLOR,0,x))}else Q|=O.COLOR_BUFFER_BIT}z&&(Q|=O.DEPTH_BUFFER_BIT),K&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),me.dispose(),it.dispose(),ae.dispose(),_.dispose(),T.dispose(),q.dispose(),Tt.dispose(),N.dispose(),ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",uh),J.removeEventListener("sessionend",hh),as.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=Mt.autoReset,z=Me.enabled,K=Me.autoUpdate,Q=Me.needsUpdate,G=Me.type;ge(),Mt.autoReset=E,Me.enabled=z,Me.autoUpdate=K,Me.needsUpdate=Q,Me.type=G}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){let z=E.target;z.removeEventListener("dispose",Je),Ht(z)}function Ht(E){hn(E),ae.remove(E)}function hn(E){let z=ae.get(E).programs;z!==void 0&&(z.forEach(function(K){ue.releaseProgram(K)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,K,Q,G,le){z===null&&(z=ft);let xe=G.isMesh&&G.matrixWorld.determinant()<0,Ce=Ep(E,z,K,Q,G);Ie.setMaterial(Q,xe);let Re=K.index,Ge=1;if(Q.wireframe===!0){if(Re=H.getWireframeAttribute(K),Re===void 0)return;Ge=2}let je=K.drawRange,De=K.attributes.position,dt=je.start*Ge,Ct=(je.start+je.count)*Ge;le!==null&&(dt=Math.max(dt,le.start*Ge),Ct=Math.min(Ct,(le.start+le.count)*Ge)),Re!==null?(dt=Math.max(dt,0),Ct=Math.min(Ct,Re.count)):De!=null&&(dt=Math.max(dt,0),Ct=Math.min(Ct,De.count));let Pt=Ct-dt;if(Pt<0||Pt===1/0)return;Tt.setup(G,Q,Ce,K,Re);let Mn,yt=Ae;if(Re!==null&&(Mn=I.get(Re),yt=lt,yt.setIndex(Mn)),G.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*bt()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(G.isLine){let Ue=Q.linewidth;Ue===void 0&&(Ue=1),Ie.setLineWidth(Ue*bt()),G.isLineSegments?yt.setMode(O.LINES):G.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else G.isPoints?yt.setMode(O.POINTS):G.isSprite&&yt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ue=G._multiDrawStarts,Si=G._multiDrawCounts,St=G._multiDrawCount,Gn=Re?I.get(Re).bytesPerElement:1,Is=ae.get(Q).currentProgram.getUniforms();for(let Tn=0;Tn<St;Tn++)Is.setValue(O,"_gl_DrawID",Tn),yt.render(Ue[Tn]/Gn,Si[Tn])}else if(G.isInstancedMesh)yt.renderInstances(dt,Pt,G.count);else if(K.isInstancedBufferGeometry){let Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Si=Math.min(K.instanceCount,Ue);yt.renderInstances(dt,Pt,Si)}else yt.render(dt,Pt)};function At(E,z,K){E.transparent===!0&&E.side===Gt&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,ga(E,z,K),E.side=ii,E.needsUpdate=!0,ga(E,z,K),E.side=Gt):ga(E,z,K)}this.compile=function(E,z,K=null){K===null&&(K=E),p=it.get(K),p.init(z),S.push(p),K.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),E!==K&&E.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let Q=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let le=G.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){let Ce=le[xe];At(Ce,K,G),Q.add(Ce)}else At(le,K,G),Q.add(le)}),S.pop(),p=null,Q},this.compileAsync=function(E,z,K=null){let Q=this.compile(E,z,K);return new Promise(G=>{function le(){if(Q.forEach(function(xe){ae.get(xe).currentProgram.isReady()&&Q.delete(xe)}),Q.size===0){G(E);return}setTimeout(le,10)}we.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let zn=null;function yi(E){zn&&zn(E)}function uh(){as.stop()}function hh(){as.start()}let as=new Vf;as.setAnimationLoop(yi),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(E){zn=E,J.setAnimationLoop(E),E===null?as.stop():as.start()},J.addEventListener("sessionstart",uh),J.addEventListener("sessionend",hh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,z,P),p=it.get(E,S.length),p.init(z),S.push(p),Ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Ne),ie=this.localClippingEnabled,re=oe.init(this.clippingPlanes,ie),m=me.get(E,y.length),m.init(),y.push(m),J.enabled===!0&&J.isPresenting===!0){let le=M.xr.getDepthSensingMesh();le!==null&&jo(le,z,-1/0,M.sortObjects)}jo(E,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(se,de),nt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,nt&&Fe.addToRenderList(m,E),this.info.render.frame++,re===!0&&oe.beginShadows();let K=p.state.shadowsArray;Me.render(K,E,z),re===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,G=m.transmissive;if(p.setupLights(),z.isArrayCamera){let le=z.cameras;if(G.length>0)for(let xe=0,Ce=le.length;xe<Ce;xe++){let Re=le[xe];dh(Q,G,E,Re)}nt&&Fe.render(E);for(let xe=0,Ce=le.length;xe<Ce;xe++){let Re=le[xe];fh(m,E,Re,Re.viewport)}}else G.length>0&&dh(Q,G,E,z),nt&&Fe.render(E),fh(m,E,z);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,z),Tt.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],re===!0&&oe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function jo(E,z,K,Q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){Q&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);let xe=q.update(E),Ce=E.material;Ce.visible&&m.push(E,xe,Ce,K,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let xe=q.update(E),Ce=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ce)){let Re=xe.groups;for(let Ge=0,je=Re.length;Ge<je;Ge++){let De=Re[Ge],dt=Ce[De.materialIndex];dt&&dt.visible&&m.push(E,xe,dt,K,Pe.z,De)}}else Ce.visible&&m.push(E,xe,Ce,K,Pe.z,null)}}let le=E.children;for(let xe=0,Ce=le.length;xe<Ce;xe++)jo(le[xe],z,K,Q)}function fh(E,z,K,Q){let G=E.opaque,le=E.transmissive,xe=E.transparent;p.setupLightsView(K),re===!0&&oe.setGlobalState(M.clippingPlanes,K),Q&&Ie.viewport(R.copy(Q)),G.length>0&&ma(G,z,K),le.length>0&&ma(le,z,K),xe.length>0&&ma(xe,z,K),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function dh(E,z,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new ht(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?ri:Nt,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let le=p.state.transmissionRenderTarget[Q.id],xe=Q.viewport||R;le.setSize(xe.z,xe.w);let Ce=M.getRenderTarget();M.setRenderTarget(le),M.getClearColor(V),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),nt&&Fe.render(K);let Re=M.toneMapping;M.toneMapping=ni;let Ge=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),re===!0&&oe.setGlobalState(M.clippingPlanes,Q),ma(E,K,Q),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),we.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let De=0,dt=z.length;De<dt;De++){let Ct=z[De],Pt=Ct.object,Mn=Ct.geometry,yt=Ct.material,Ue=Ct.group;if(yt.side===Gt&&Pt.layers.test(Q.layers)){let Si=yt.side;yt.side=Vt,yt.needsUpdate=!0,ph(Pt,K,Q,Mn,yt,Ue),yt.side=Si,yt.needsUpdate=!0,je=!0}}je===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}M.setRenderTarget(Ce),M.setClearColor(V,X),Ge!==void 0&&(Q.viewport=Ge),M.toneMapping=Re}function ma(E,z,K){let Q=z.isScene===!0?z.overrideMaterial:null;for(let G=0,le=E.length;G<le;G++){let xe=E[G],Ce=xe.object,Re=xe.geometry,Ge=Q===null?xe.material:Q,je=xe.group;Ce.layers.test(K.layers)&&ph(Ce,z,K,Re,Ge,je)}}function ph(E,z,K,Q,G,le){E.onBeforeRender(M,z,K,Q,G,le),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(M,z,K,Q,E,le),G.transparent===!0&&G.side===Gt&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,M.renderBufferDirect(K,z,Q,G,E,le),G.side=ii,G.needsUpdate=!0,M.renderBufferDirect(K,z,Q,G,E,le),G.side=Gt):M.renderBufferDirect(K,z,Q,G,E,le),E.onAfterRender(M,z,K,Q,G,le)}function ga(E,z,K){z.isScene!==!0&&(z=ft);let Q=ae.get(E),G=p.state.lights,le=p.state.shadowsArray,xe=G.state.version,Ce=ue.getParameters(E,G.state,le,z,K),Re=ue.getProgramCacheKey(Ce),Ge=Q.programs;Q.environment=E.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(E.isMeshStandardMaterial?T:_).get(E.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",Je),Ge=new Map,Q.programs=Ge);let je=Ge.get(Re);if(je!==void 0){if(Q.currentProgram===je&&Q.lightsStateVersion===xe)return gh(E,Ce),je}else Ce.uniforms=ue.getUniforms(E),E.onBeforeCompile(Ce,M),je=ue.acquireProgram(Ce,Re),Ge.set(Re,je),Q.uniforms=Ce.uniforms;let De=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=oe.uniform),gh(E,Ce),Q.needsLights=Cp(E),Q.lightsStateVersion=xe,Q.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=je,Q.uniformsList=null,je}function mh(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=$s.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function gh(E,z){let K=ae.get(E);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Ep(E,z,K,Q,G){z.isScene!==!0&&(z=ft),C.resetTextureUnits();let le=z.fog,xe=Q.isMeshStandardMaterial?z.environment:null,Ce=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ai,Re=(Q.isMeshStandardMaterial?T:_).get(Q.envMap||xe),Ge=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Ct=!!K.morphAttributes.color,Pt=ni;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=M.toneMapping);let Mn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=Mn!==void 0?Mn.length:0,Ue=ae.get(Q),Si=p.state.lights;if(re===!0&&(ie===!0||E!==b)){let Bn=E===b&&Q.id===w;oe.setState(Q,E,Bn)}let St=!1;Q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Si.state.version||Ue.outputColorSpace!==Ce||G.isBatchedMesh&&Ue.batching===!1||!G.isBatchedMesh&&Ue.batching===!0||G.isBatchedMesh&&Ue.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ue.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ue.instancing===!1||!G.isInstancedMesh&&Ue.instancing===!0||G.isSkinnedMesh&&Ue.skinning===!1||!G.isSkinnedMesh&&Ue.skinning===!0||G.isInstancedMesh&&Ue.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ue.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ue.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ue.instancingMorph===!1&&G.morphTexture!==null||Ue.envMap!==Re||Q.fog===!0&&Ue.fog!==le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==oe.numPlanes||Ue.numIntersection!==oe.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==je||Ue.morphTargets!==De||Ue.morphNormals!==dt||Ue.morphColors!==Ct||Ue.toneMapping!==Pt||Ue.morphTargetsCount!==yt)&&(St=!0):(St=!0,Ue.__version=Q.version);let Gn=Ue.currentProgram;St===!0&&(Gn=ga(Q,z,G));let Is=!1,Tn=!1,Tr=!1,It=Gn.getUniforms(),$n=Ue.uniforms;if(Ie.useProgram(Gn.program)&&(Is=!0,Tn=!0,Tr=!0),Q.id!==w&&(w=Q.id,Tn=!0),Is||b!==E){Ie.buffers.depth.getReversed()?(ee.copy(E.projectionMatrix),P0(ee),I0(ee),It.setValue(O,"projectionMatrix",ee)):It.setValue(O,"projectionMatrix",E.projectionMatrix),It.setValue(O,"viewMatrix",E.matrixWorldInverse);let Fi=It.map.cameraPosition;Fi!==void 0&&Fi.setValue(O,Se.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&It.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&It.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Tn=!0,Tr=!0)}if(G.isSkinnedMesh){It.setOptional(O,G,"bindMatrix"),It.setOptional(O,G,"bindMatrixInverse");let Bn=G.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),It.setValue(O,"boneTexture",Bn.boneTexture,C))}G.isBatchedMesh&&(It.setOptional(O,G,"batchingTexture"),It.setValue(O,"batchingTexture",G._matricesTexture,C),It.setOptional(O,G,"batchingIdTexture"),It.setValue(O,"batchingIdTexture",G._indirectTexture,C),It.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&It.setValue(O,"batchingColorTexture",G._colorsTexture,C));let Cr=K.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&ke.update(G,K,Gn),(Tn||Ue.receiveShadow!==G.receiveShadow)&&(Ue.receiveShadow=G.receiveShadow,It.setValue(O,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&($n.envMap.value=Re,$n.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&($n.envMapIntensity.value=z.environmentIntensity),Tn&&(It.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ue.needsLights&&Tp($n,Tr),le&&Q.fog===!0&&ce.refreshFogUniforms($n,le),ce.refreshMaterialUniforms($n,Q,Y,$,p.state.transmissionRenderTarget[E.id]),$s.upload(O,mh(Ue),$n,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($s.upload(O,mh(Ue),$n,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&It.setValue(O,"center",G.center),It.setValue(O,"modelViewMatrix",G.modelViewMatrix),It.setValue(O,"normalMatrix",G.normalMatrix),It.setValue(O,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Bn=Q.uniformsGroups;for(let Fi=0,Oi=Bn.length;Fi<Oi;Fi++){let vh=Bn[Fi];N.update(vh,Gn),N.bind(vh,Gn)}}return Gn}function Tp(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Cp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,z,K){ae.get(E.texture).__webglTexture=z,ae.get(E.depthTexture).__webglTexture=K;let Q=ae.get(E);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let K=ae.get(E);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,K=0){P=E,A=z,v=K;let Q=!0,G=null,le=!1,xe=!1;if(E){let Re=ae.get(E);if(Re.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1;else if(Re.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Re.__hasExternalTextures)C.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let De=E.depthTexture;if(Re.__boundDepthTexture!==De){if(De!==null&&ae.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);let je=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[z])?G=je[z][K]:G=je[z],le=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?G=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[K]:G=je,R.copy(E.viewport),U.copy(E.scissor),k=E.scissorTest}else R.copy(Ee).multiplyScalar(Y).floor(),U.copy(ze).multiplyScalar(Y).floor(),k=Ze;if(Ie.bindFramebuffer(O.FRAMEBUFFER,G)&&Q&&Ie.drawBuffers(E,G),Ie.viewport(R),Ie.scissor(U),Ie.setScissorTest(k),le){let Re=ae.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,K)}else if(xe){let Re=ae.get(E.texture),Ge=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,K||0,Ge)}w=-1},this.readRenderTargetPixels=function(E,z,K,Q,G,le,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){Ie.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Re=E.texture,Ge=Re.format,je=Re.type;if(!qe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Q&&K>=0&&K<=E.height-G&&O.readPixels(z,K,Q,G,$e.convert(Ge),$e.convert(je),le)}finally{let Re=P!==null?ae.get(P).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,z,K,Q,G,le,xe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){let Re=E.texture,Ge=Re.format,je=Re.type;if(!qe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-Q&&K>=0&&K<=E.height-G){Ie.bindFramebuffer(O.FRAMEBUFFER,Ce);let De=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),O.readPixels(z,K,Q,G,$e.convert(Ge),$e.convert(je),0);let dt=P!==null?ae.get(P).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,dt);let Ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await D0(O,Ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(De),O.deleteSync(Ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,K=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let Q=Math.pow(2,-K),G=Math.floor(E.image.width*Q),le=Math.floor(E.image.height*Q),xe=z!==null?z.x:0,Ce=z!==null?z.y:0;C.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,xe,Ce,G,le),Ie.unbindTexture()},this.copyTextureToTexture=function(E,z,K=null,Q=null,G=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,E=arguments[1],z=arguments[2],G=arguments[3]||0,K=null);let le,xe,Ce,Re,Ge,je,De,dt,Ct,Pt=E.isCompressedTexture?E.mipmaps[G]:E.image;K!==null?(le=K.max.x-K.min.x,xe=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,Re=K.min.x,Ge=K.min.y,je=K.isBox3?K.min.z:0):(le=Pt.width,xe=Pt.height,Ce=Pt.depth||1,Re=0,Ge=0,je=0),Q!==null?(De=Q.x,dt=Q.y,Ct=Q.z):(De=0,dt=0,Ct=0);let Mn=$e.convert(z.format),yt=$e.convert(z.type),Ue;z.isData3DTexture?(C.setTexture3D(z,0),Ue=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),Ue=O.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),Ue=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Si=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Gn=O.getParameter(O.UNPACK_SKIP_PIXELS),Is=O.getParameter(O.UNPACK_SKIP_ROWS),Tn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);let Tr=E.isDataArrayTexture||E.isData3DTexture,It=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let $n=ae.get(E),Cr=ae.get(z),Bn=ae.get($n.__renderTarget),Fi=ae.get(Cr.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Oi=0;Oi<Ce;Oi++)Tr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,G,je+Oi),E.isDepthTexture?(It&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ae.get(z).__webglTexture,G,Ct+Oi),O.blitFramebuffer(Re,Ge,le,xe,De,dt,le,xe,O.DEPTH_BUFFER_BIT,O.NEAREST)):It?O.copyTexSubImage3D(Ue,G,De,dt,Ct+Oi,Re,Ge,le,xe):O.copyTexSubImage2D(Ue,G,De,dt,Ct+Oi,Re,Ge,le,xe);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else It?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ue,G,De,dt,Ct,le,xe,Ce,Mn,yt,Pt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,G,De,dt,Ct,le,xe,Ce,Mn,Pt.data):O.texSubImage3D(Ue,G,De,dt,Ct,le,xe,Ce,Mn,yt,Pt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,De,dt,le,xe,Mn,yt,Pt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,De,dt,Pt.width,Pt.height,Mn,Pt.data):O.texSubImage2D(O.TEXTURE_2D,G,De,dt,le,xe,Mn,yt,Pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Si),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Is),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Tn),G===0&&z.generateMipmaps&&O.generateMipmap(Ue),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,z,K=null,Q=null,G=0){return E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,E=arguments[2],z=arguments[3],G=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,K,Q,G)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){A=0,v=0,P=null,Ie.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}};var ao=class t{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=n,this.far=i}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ii=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Pc=class extends tn{constructor(e=null,n=1,i=1,s,r,a,o,l,c=Wt,h=Wt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oo=class extends pn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new wt,Sf=new wt,Oa=[],bf=new Pi,Ex=new wt,Ur=new Le,Br=new qi,lo=class extends Le{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new oo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ex)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,qs),bf.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(bf)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,qs),Br.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Br)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Sf.multiplyMatrices(i,qs),Ur.matrixWorld=Sf,Ur.raycast(e,Oa);for(let a=0,o=Oa.length;a<o;a++){let l=Oa[a];l.instanceId=r,l.object=this,n.push(l)}Oa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(s*this.count),s,this.count,ru,ti));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qr=class extends On{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mf=new wt,Ic=new $a,ka=new qi,Ha=new B,co=class extends mn{constructor(e=new ln,n=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Mf.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(Mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Ha.fromBufferAttribute(u,m),Af(Ha,m,l,s,e,n,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Ha.fromBufferAttribute(u,g),Af(Ha,g,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Af(t,e,n,i,s,r,a){let o=Ic.distanceSqToPoint(t);if(o<n){let l=new B;Ic.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qi=class extends tn{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),s=0,r=i.length,a;n?a=n:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=n||(a.isVector2?new fe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new B,s=[],r=[],a=[],o=new B,l=new wt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(n===!0){let d=Math.acos(an(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},uo=class extends Kn{constructor(e=0,n=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new fe){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uc=class extends uo{constructor(e,n,i,s,r,a){super(e,n,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var za=new B,Tl=new fu,Cl=new fu,Rl=new fu,Bc=class extends Kn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new B){let i=n,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(za.subVectors(s[0],s[1]).add(s[0]),c=za);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(za.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Tl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Cl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Cl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Tl.calc(l),Cl.calc(l),Rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _f(t,e,n,i,s){let r=(i-e)*.5,a=(s-n)*.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Tx(t,e){let n=1-t;return n*n*e}function Cx(t,e){return 2*(1-t)*t*e}function Rx(t,e){return t*t*e}function Hr(t,e,n,i){return Tx(t,e)+Cx(t,n)+Rx(t,i)}function Dx(t,e){let n=1-t;return n*n*n*e}function Px(t,e){let n=1-t;return 3*n*n*t*e}function Ix(t,e){return 3*(1-t)*t*t*e}function Ux(t,e){return t*t*t*e}function zr(t,e,n,i,s){return Dx(t,e)+Px(t,n)+Ix(t,i)+Ux(t,s)}var Lc=class extends Kn{constructor(e=new fe,n=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new fe){let i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends Kn{constructor(e=new B,n=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new B){let i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fc=class extends Kn{constructor(e=new fe,n=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new fe){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new fe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends Kn{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Kn{constructor(e=new fe,n=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new fe){let i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ar=class extends Kn{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){let i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y),Hr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new fe){let i=n,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(_f(o,l.x,c.x,h.x,u.x),_f(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new fe().fromArray(s))}return this}},Bx=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Bc,CubicBezierCurve:Lc,CubicBezierCurve3:Nc,EllipseCurve:uo,LineCurve:Fc,LineCurve3:Oc,QuadraticBezierCurve:kc,QuadraticBezierCurve3:ar,SplineCurve:Hc});var _n=class t extends ln{constructor(e=1,n=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(d,2));function y(){let M=new B,D=new B,A=0,v=(n-e)/i;for(let P=0;P<=r;P++){let w=[],b=P/r,R=b*(n-e)+e;for(let U=0;U<=s;U++){let k=U/s,V=k*l+o,X=Math.sin(V),W=Math.cos(V);D.x=R*X,D.y=-b*i+m,D.z=R*W,u.push(D.x,D.y,D.z),M.set(X,v,W).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-b),w.push(g++)}x.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let b=x[w][P],R=x[w+1][P],U=x[w+1][P+1],k=x[w][P+1];(e>0||w!==0)&&(h.push(b,R,k),A+=3),(n>0||w!==r-1)&&(h.push(R,U,k),A+=3)}c.addGroup(p,A,0),p+=A}function S(M){let D=g,A=new fe,v=new B,P=0,w=M===!0?e:n,b=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let R=g;for(let U=0;U<=s;U++){let V=U/s*l+o,X=Math.cos(V),W=Math.sin(V);v.x=w*W,v.y=m*b,v.z=w*X,u.push(v.x,v.y,v.z),f.push(0,b,0),A.x=X*.5+.5,A.y=W*.5*b+.5,d.push(A.x,A.y),g++}for(let U=0;U<s;U++){let k=D+U,V=R+U;M===!0?h.push(V,V+1,k):h.push(V+1,V,k),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class t extends _n{constructor(e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zc=class t extends ln{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new B,M=new B,D=new B;for(let A=0;A<n.length;A+=3)d(n[A+0],S),d(n[A+1],M),d(n[A+2],D),l(S,M,D,y)}function l(y,S,M,D){let A=D+1,v=[];for(let P=0;P<=A;P++){v[P]=[];let w=y.clone().lerp(M,P/A),b=S.clone().lerp(M,P/A),R=A-P;for(let U=0;U<=R;U++)U===0&&P===A?v[P][U]=w:v[P][U]=w.clone().lerp(b,U/R)}for(let P=0;P<A;P++)for(let w=0;w<2*(A-P)-1;w++){let b=Math.floor(w/2);w%2===0?(f(v[P][b+1]),f(v[P+1][b]),f(v[P][b])):(f(v[P][b+1]),f(v[P+1][b+1]),f(v[P+1][b]))}}function c(y){let S=new B;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let y=new B;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let M=m(y)/2/Math.PI+.5,D=p(y)/Math.PI+.5;a.push(M,1-D)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let S=a[y+0],M=a[y+2],D=a[y+4],A=Math.max(S,M,D),v=Math.min(S,M,D);A>.9&&v<.1&&(S<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),D<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,S){let M=y*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){let y=new B,S=new B,M=new B,D=new B,A=new fe,v=new fe,P=new fe;for(let w=0,b=0;w<r.length;w+=9,b+=6){y.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),A.set(a[b+0],a[b+1]),v.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),D.copy(y).add(S).add(M).divideScalar(3);let R=m(D);x(A,b+0,y,R),x(v,b+2,S,R),x(P,b+4,M,R)}}function x(y,S,M,D){D<0&&y.x===1&&(a[S]=y.x-1),M.x===0&&M.z===0&&(a[S]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.details)}};var Kr=class t extends zc{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var Qn=class t extends ln{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,f=new B,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],S=p/i,M=0;p===0&&a===0?M=.5/n:p===i&&l===Math.PI&&(M=-.5/n);for(let D=0;D<=n;D++){let A=D/n;u.x=-e*Math.cos(s+A*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-S),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<n;y++){let S=h[p][y+1],M=h[p][y],D=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(S,M,A),(p!==i-1||l<Math.PI)&&d.push(M,D,A)}this.setIndex(d),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ho=class t extends ln{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new B,u=new B,f=new B;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;u.x=(e+n*Math.cos(m))*Math.cos(x),u.y=(e+n*Math.cos(m))*Math.sin(x),u.z=n*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var fo=class t extends ln{constructor(e=new ar(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(n,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,l=new B,c=new fe,h=new B,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(d,2));function x(){for(let S=0;S<n;S++)m(S);m(r===!1?n:0),y(),p()}function m(S){h=e.getPointAt(S/n,h);let M=a.normals[S],D=a.binormals[S];for(let A=0;A<=s;A++){let v=A/s*Math.PI*2,P=Math.sin(v),w=-Math.cos(v);l.x=w*M.x+P*D.x,l.y=w*M.y+P*D.y,l.z=w*M.z+P*D.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=n;S++)for(let M=1;M<=s;M++){let D=(s+1)*(S-1)+(M-1),A=(s+1)*S+(M-1),v=(s+1)*S+M,P=(s+1)*(S-1)+M;g.push(D,A,P),g.push(A,v,P)}}function y(){for(let S=0;S<=n;S++)for(let M=0;M<=s;M++)c.x=S/n,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new Bx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var xs=class extends On{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ga(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Lx(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var lr=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break e}a=n.length;break t}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends lr{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,o=2*n-i;break;case _h:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:a=e,l=2*i-n;break;case _h:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+y*a[c+D]+S*a[l+D]+M*a[u+D];return r}},Vc=class extends lr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(s-n),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Wc=class extends lr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(n,this.TimeBufferType),this.values=Ga(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Ka:n=this.InterpolantFactoryMethodDiscrete;break;case mc:n=this.InterpolantFactoryMethodLinear;break;case el:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Lx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=n[u+g];if(x!==n[f+g]||x!==n[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)n[f+d]=n[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=mc;var ys=class extends Zn{constructor(e,n,i){super(e,n,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Ka;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Zn{};Xc.prototype.ValueTypeName="color";var Yc=class extends Zn{};Yc.prototype.ValueTypeName="number";var qc=class extends lr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let h=c+o;c!==h;c+=4)si.slerpFlat(r,0,a,c-o,a,c,l);return r}},po=class extends Zn{InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Zn{constructor(e,n,i){super(e,n,i)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Ka;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Zn{};Kc.prototype.ValueTypeName="vector";var Qc=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Nx=new Qc,Zc=class{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var mo=class extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},go=class extends mo{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}},Dl=new wt,wf=new B,Ef=new B,Jc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;wf.setFromMatrixPosition(e.matrixWorld),n.position.copy(wf),Ef.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ef),n.updateMatrixWorld(),Dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var jc=class extends Jc{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vo=class extends mo{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var du="\\[\\]\\.:\\/",Fx=new RegExp("["+du+"]","g"),pu="[^"+du+"]",Ox="[^"+du.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",pu),Hx=/(WCOD+)?/.source.replace("WCOD",Ox),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),Vx=new RegExp("^"+kx+Hx+zx+Gx+"$"),Wx=["material","materials","bones","map"],$c=class{constructor(e,n,i){let s=i||Lt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Lt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(e){let n=Vx.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=$c;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sb=new Float32Array(1);var _e=class t{constructor(e){this.value=e}clone(){return new t(this.value.clone===void 0?this.value:this.value.clone())}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var mu=1/1e3,Xx=1e3,Yx=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*mu}get fixedDelta(){return this._fixedDelta*mu}set fixedDelta(t){this._fixedDelta=t*Xx}get elapsed(){return this._elapsed*mu}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},qx=(()=>{let t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new ln;return n.setAttribute("position",new pn(t,3)),n.setAttribute("uv",new pn(e,2)),n})(),wn=class xu{static get fullscreenGeometry(){return qx}constructor(e="Pass",n=new Ii,i=new sr){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Le(xu.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Ii),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Ui){}render(e,n,i,s,r){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(let e of Object.keys(this)){let n=this[e];(n instanceof ht||n instanceof On||n instanceof tn||n instanceof xu)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Kx=class extends wn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,s){let r=t.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Qx=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,yu="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Jf=class extends gt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new _e(null),opacity:new _e(1)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Qx,vertexShader:yu})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},jf=class extends wn{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new Jf,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new ht(1,1,{minFilter:Kt,magFilter:Kt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,s){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Nt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===et&&(this.renderTarget.texture.colorSpace=et))}},Kf=new Te,$f=class extends wn{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=r!==null,c=a>=0;l?(t.getClearColor(Kf),t.setClearColor(r,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(Kf,o):c&&t.setClearAlpha(o)}},Zx=class extends wn{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new $f(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,s){let r=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},ed=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new jf,this.depthTexture=null,this.passes=[],this.timer=new Yx,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){let e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){let e=t.getSize(new fe),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Nt&&t.outputColorSpace===et&&(this.inputBuffer.texture.colorSpace=et,this.outputBuffer.texture.colorSpace=et,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(let s of this.passes)s.initialize(t,n,i)}}replaceRenderer(t,e=!0){let n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){let t=this.depthTexture=new Ki;return this.inputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(t.format=Yi,t.type=Xi):t.type=qn,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){let s=this.renderer,r=s===null?new fe:s.getDrawingBufferSize(new fe),a={minFilter:Kt,magFilter:Kt,stencilBuffer:e,depthBuffer:t,type:n},o=new ht(r.width,r.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),n===Nt&&s!==null&&s.outputColorSpace===et&&(o.texture.colorSpace=et),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(let e of this.passes)e.mainScene=t}setMainCamera(t){for(let e of this.passes)e.mainCamera=t}addPass(t,e){let n=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new fe),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.setRenderer(i),t.setSize(s.width,s.height),t.initialize(i,r,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let o=this.createDepthTexture();for(t of n)t.setDepthTexture(o)}else t.setDepthTexture(this.depthTexture)}removePass(t){let e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){let r=(o,l)=>o||l.needsDepthTexture;e.reduce(r,!1)||(t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){let e=this.renderer,n=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r=!1,a,o,l;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(let c of this.passes)c.enabled&&(c.render(e,i,s,t,r),c.needsSwap&&(r&&(n.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),n.render(e,i,s,t,r),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=s,s=l),c instanceof Zx?r=!0:c instanceof Kx&&(r=!1))}setSize(t,e,n){let i=this.renderer,s=i.getSize(new fe);(t===void 0||e===void 0)&&(t=s.width,e=s.height),(s.width!==t||s.height!==e)&&i.setSize(t,e,n);let r=i.getDrawingBufferSize(new fe);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),wn.fullscreenGeometry.dispose()}},li={NONE:0,DEPTH:1,CONVOLUTION:2},pt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Jx=class{constructor(){this.shaderParts=new Map([[pt.FRAGMENT_HEAD,null],[pt.FRAGMENT_MAIN_UV,null],[pt.FRAGMENT_MAIN_IMAGE,null],[pt.VERTEX_HEAD,null],[pt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=li.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ai}};var gu=!1,Qf=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Gt:n=this.materialsFlatShadedDoubleSide;break;case Vt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Gt:n=this.materialsDoubleSide;break;case Vt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof gt))return t.clone();let e=t.uniforms,n=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,n.set(s,r))}let i=t.clone();for(let s of n)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){let e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(let n of e)n.uniforms=Object.assign({},t.uniforms),n.side=ii;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Vt,i}),this.materialsDoubleSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Gt,i}),this.materialsFlatShaded=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Vt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Gt,i})}}render(t,e,n){let i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,gu){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=s}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return gu}static set workaroundEnabled(t){gu=t}};var ji=-1,oi=class extends An{constructor(t,e=ji,n=ji,i=1){super(),this.resizable=t,this.baseSize=new fe(1,1),this.preferredSize=new fe(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new fe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==ji?n.width=e.width:e.height!==ji?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==ji?n.height=e.height:e.width!==ji?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(ji),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return ji}};var Xe={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},jx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",$x="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",e2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",t2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",n2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",i2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",s2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",r2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",a2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",o2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",l2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",c2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",u2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",h2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",f2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",d2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",p2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",m2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",g2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",v2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",x2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",y2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",S2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",b2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",M2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",A2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",_2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",w2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",E2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",T2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",C2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",R2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",D2=new Map([[Xe.ADD,jx],[Xe.ALPHA,$x],[Xe.AVERAGE,e2],[Xe.COLOR,t2],[Xe.COLOR_BURN,n2],[Xe.COLOR_DODGE,i2],[Xe.DARKEN,s2],[Xe.DIFFERENCE,r2],[Xe.DIVIDE,a2],[Xe.DST,null],[Xe.EXCLUSION,o2],[Xe.HARD_LIGHT,l2],[Xe.HARD_MIX,c2],[Xe.HUE,u2],[Xe.INVERT,h2],[Xe.INVERT_RGB,f2],[Xe.LIGHTEN,d2],[Xe.LINEAR_BURN,p2],[Xe.LINEAR_DODGE,m2],[Xe.LINEAR_LIGHT,g2],[Xe.LUMINOSITY,v2],[Xe.MULTIPLY,x2],[Xe.NEGATION,y2],[Xe.NORMAL,S2],[Xe.OVERLAY,b2],[Xe.PIN_LIGHT,M2],[Xe.REFLECT,A2],[Xe.SATURATION,_2],[Xe.SCREEN,w2],[Xe.SOFT_LIGHT,E2],[Xe.SRC,T2],[Xe.SUBTRACT,C2],[Xe.VIVID_LIGHT,R2]]),P2=class extends An{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new _e(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return D2.get(this.blendFunction)}},Su={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},I2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,U2="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",B2=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],L2=class extends gt{constructor(t=new Et){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new _e(null),texelSize:new _e(new Et),scale:new _e(1),kernel:new _e(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:I2,vertexShader:U2}),this.setTexelSize(t.x,t.y),this.kernelSize=Su.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return B2[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){let n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},N2=class extends wn{constructor({kernelSize:t=Su.MEDIUM,resolutionScale:e=.5,width:n=oi.AUTO_SIZE,height:i=oi.AUTO_SIZE,resolutionX:s=n,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new ht(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new oi(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new L2,this._blurMaterial.kernelSize=t,this.copyMaterial=new Jf}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,s){let r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence,u=e;this.fullscreenMaterial=c;for(let f=0,d=h.length;f<d;++f){let g=(f&1)===0?o:l;c.kernel=h[f],c.inputBuffer=u.texture,t.setRenderTarget(g),t.render(r,a),u=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(r,a)}setSize(t,e){let n=this.resolution;n.setBaseSize(t,e);let i=n.width,s=n.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Nt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===et&&(this.renderTargetA.texture.colorSpace=et,this.renderTargetB.texture.colorSpace=et))}static get AUTO_SIZE(){return oi.AUTO_SIZE}},F2=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,O2=class extends gt{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"170".replace(/\D+/g,"")},uniforms:{inputBuffer:new _e(null),threshold:new _e(0),smoothing:new _e(1),range:new _e(null)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:F2,vertexShader:yu}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},td=class extends wn{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:s=oi.AUTO_SIZE,height:r=oi.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new O2(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new oi(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,s){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){let n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==Nt&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},k2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,H2="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",z2=class extends gt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new _e(null),texelSize:new _e(new fe)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:k2,vertexShader:H2})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},G2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,V2="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",W2=class extends gt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new _e(null),supportBuffer:new _e(null),texelSize:new _e(new fe),radius:new _e(.85)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:G2,vertexShader:V2})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},X2=class extends wn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new z2,this.upsamplingMaterial=new W2,this.resolution=new fe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){let i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){let s=e.clone();s.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,s){let{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this,u=e;this.fullscreenMaterial=o;for(let f=0,d=c.length;f<d;++f){let g=c[f];o.setSize(u.width,u.height),o.inputBuffer=u.texture,t.setRenderTarget(g),t.render(r,a),u=g}this.fullscreenMaterial=l;for(let f=h.length-1;f>=0;--f){let d=h[f];l.setSize(u.width,u.height),l.inputBuffer=u.texture,l.supportBuffer=c[f].texture,t.setRenderTarget(d),t.render(r,a),u=d}}setSize(t,e){let n=this.resolution;n.set(t,e);let i=n.width,s=n.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(t,e,n){if(n!==void 0){let i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let s of i)s.texture.type=n;if(n!==Nt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===et)for(let s of i)s.texture.colorSpace=et}}dispose(){super.dispose();for(let t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},fr=class extends An{constructor(t,e,{attributes:n=li.NONE,blendFunction:i=Xe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new P2(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ai,this._outputColorSpace=Nn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Ui){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(let t of Object.keys(this)){let e=this[t];(e instanceof ht||e instanceof On||e instanceof tn||e instanceof wn)&&this[t].dispose()}}},Y2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,nd=class extends fr{constructor({blendFunction:t=Xe.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:n=.025,mipmapBlur:i=!1,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Su.LARGE,resolutionScale:l=.5,width:c=oi.AUTO_SIZE,height:h=oi.AUTO_SIZE,resolutionX:u=c,resolutionY:f=h}={}){super("BloomEffect",Y2,{blendFunction:t,uniforms:new Map([["map",new _e(null)],["intensity",new _e(s)]])}),this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new N2({kernelSize:o}),this.luminancePass=new td({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new X2,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;let d=this.resolution=new oi(this,u,f,l);d.addEventListener("change",g=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,s.renderTarget):this.blurPass.render(t,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){let n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,t!==null&&t.outputColorSpace===et&&(this.renderTarget.texture.colorSpace=et))}};var id=class extends wn{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new $f,this.overrideMaterialManager=n===null?null:new Qf(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){let t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){let e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new Qf(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=t.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,r,a):t.render(r,a),a.layers.mask=l,r.background=c,t.shadowMap.autoUpdate=h}};var bn={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8};var kb=Math.PI*.5;var q2=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,K2=class extends gt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new _e(null),luminanceBuffer1:new _e(null),minLuminance:new _e(.01),deltaTime:new _e(0),tau:new _e(1)},extensions:{shaderTextureLOD:!0},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:q2,vertexShader:yu})}set luminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}setLuminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}set luminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}setLuminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}set mipLevel1x1(t){this.defines.MIP_LEVEL_1X1=t.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(t){this.mipLevel1x1=t}set deltaTime(t){this.uniforms.deltaTime.value=t}setDeltaTime(t){this.uniforms.deltaTime.value=t}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(t){this.uniforms.minLuminance.value=t}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(t){this.uniforms.minLuminance.value=t}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(t){this.uniforms.tau.value=t}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(t){this.uniforms.tau.value=t}},Q2=class extends wn{constructor(t,{minLuminance:e=.01,adaptationRate:n=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new K2,this.needsSwap=!1,this.renderTargetPrevious=new ht(1,1,{minFilter:Wt,magFilter:Wt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";let i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=t,i.minLuminance=e,i.adaptationRate=n,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new jf(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(t){this.fullscreenMaterial.mipLevel1x1=t}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(t){this.fullscreenMaterial.adaptationRate=t}render(t,e,n,i,s){this.fullscreenMaterial.deltaTime=i,t.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),t.render(this.scene,this.camera),this.copyPass.render(t,this.renderTargetAdapted)}},Z2=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,sd=class extends fr{constructor({blendFunction:t=Xe.SRC,adaptive:e=!1,mode:n=e?bn.REINHARD2_ADAPTIVE:bn.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",Z2,{blendFunction:t,uniforms:new Map([["luminanceBuffer",new _e(null)],["maxLuminance",new _e(s)],["whitePoint",new _e(r)],["middleGrey",new _e(a)],["averageLuminance",new _e(l)]])}),this.renderTargetLuminance=new ht(1,1,{minFilter:Ci,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new td({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Q2(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=n}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(t){if(this.mode===t)return;let n="170".replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",t.toFixed(0)),t){case bn.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case bn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case bn.CINEON:case bn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",n);break;case bn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case bn.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case bn.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=t===bn.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(t){this.mode=t}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(t){this.uniforms.get("whitePoint").value=t}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(t){this.uniforms.get("middleGrey").value=t}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(t){this.uniforms.get("averageLuminance").value=t}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(t){let e=Math.max(0,Math.ceil(Math.log2(t))),n=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(n,n),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(t){this.resolution=t}get adaptive(){return this.mode===bn.REINHARD2_ADAPTIVE}set adaptive(t){this.mode=t?bn.REINHARD2_ADAPTIVE:bn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(t){this.adaptiveLuminanceMaterial.adaptationRate=t}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(t){console.warn(this.name,"distinction was removed.")}update(t,e,n){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(t,e),this.adaptiveLuminancePass.render(t,null,null,n))}initialize(t,e,n){this.adaptiveLuminancePass.initialize(t,e,n)}};var J2=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,j2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",$2=class extends gt{constructor(t,e,n,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"170".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new _e(null),depthBuffer:new _e(null),resolution:new _e(new fe),texelSize:new _e(new fe),cameraNear:new _e(.3),cameraFar:new _e(1e3),aspect:new _e(1),time:new _e(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Ui){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=J2.replace(pt.FRAGMENT_HEAD,t.get(pt.FRAGMENT_HEAD)||"").replace(pt.FRAGMENT_MAIN_UV,t.get(pt.FRAGMENT_MAIN_UV)||"").replace(pt.FRAGMENT_MAIN_IMAGE,t.get(pt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=j2.replace(pt.VERTEX_HEAD,t.get(pt.VERTEX_HEAD)||"").replace(pt.VERTEX_MAIN_SUPPORT,t.get(pt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(let e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(let e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(let e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof on?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){let n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return pt}};var Wb=Number("170".replace(/\D+/g,"")),bs=255/256,Xb=new Float32Array([bs/256**3,bs/256**2,bs/256,bs]),Yb=new Float32Array([bs,bs/256,bs/256**2,1/256**3]);function Zf(t,e,n){for(let i of e){let s="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(r,s))}}function ey(t,e,n){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(n.attributes&li.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts,c=l.get(pt.FRAGMENT_HEAD)||"",h=l.get(pt.FRAGMENT_MAIN_UV)||"",u=l.get(pt.FRAGMENT_MAIN_IMAGE)||"",f=l.get(pt.VERTEX_HEAD)||"",d=l.get(pt.VERTEX_MAIN_SUPPORT)||"",g=new Set,x=new Set;if(a&&(h+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let y=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${t}MainSupport(`,d+=y?`vUv);
`:`);
`;for(let S of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let M of S[1].split(/\s*,\s*/))n.varyings.add(M),g.add(M),x.add(M);for(let S of s.matchAll(o))x.add(S[1])}for(let y of i.matchAll(o))x.add(y[1]);for(let y of e.defines.keys())x.add(y.replace(/\([\w\s,]*\)/g,""));for(let y of e.uniforms.keys())x.add(y);x.delete("while"),x.delete("for"),x.delete("if"),e.uniforms.forEach((y,S)=>n.uniforms.set(t+S.charAt(0).toUpperCase()+S.slice(1),y)),e.defines.forEach((y,S)=>n.defines.set(t+S.charAt(0).toUpperCase()+S.slice(1),y));let m=new Map([["fragment",i],["vertex",s]]);Zf(t,x,n.defines),Zf(t,x,m),i=m.get("fragment"),s=m.get("vertex");let p=e.blendMode;if(n.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(u+=e.inputColorSpace===et?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Nn?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);let y=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${t}MainImage(color0, UV, `,(n.attributes&li.DEPTH)!==0&&y.test(i)&&(u+="depth, ",n.readDepth=!0),u+=`color1);
	`;let S=t+"BlendOpacity";n.uniforms.set(S,p.opacity),u+=`color0 = blend${p.blendFunction}(color0, color1, ${S});

	`,c+=`uniform float ${S};

`}if(c+=i+`
`,s!==null&&(f+=s+`
`),l.set(pt.FRAGMENT_HEAD,c),l.set(pt.FRAGMENT_MAIN_UV,h),l.set(pt.FRAGMENT_MAIN_IMAGE,u),l.set(pt.VERTEX_HEAD,f),l.set(pt.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(let y of e.extensions)n.extensions.add(y)}}var bo=class extends wn{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new $2(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(let e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(let e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){let e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let t=new Jx,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===Xe.DST)t.attributes|=a.getAttributes()&li.DEPTH;else{if((t.attributes&a.getAttributes()&li.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);ey("e"+e++,a,t)}let n=t.shaderParts.get(pt.FRAGMENT_HEAD),i=t.shaderParts.get(pt.FRAGMENT_MAIN_IMAGE),s=t.shaderParts.get(pt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of t.blendModes.values())n+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(t.attributes&li.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===et&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(pt.FRAGMENT_HEAD,n),t.shaderParts.set(pt.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(pt.FRAGMENT_MAIN_UV,s);for(let[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Ui){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(let n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,s){for(let r of this.effects)r.update(t,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(let n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(let i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==Nt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){t.type==="change"&&this.recompile()}};var Kb=[new Float32Array(3),new Float32Array(3)],Qb=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Zb=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var Jb=[new Float32Array(2),new Float32Array(2)];var jb=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),$b=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],eM=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],tM=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var nM=new Map([[gn(0,0,0,0),new Float32Array([0,0,0,0])],[gn(0,0,0,1),new Float32Array([0,0,0,1])],[gn(0,0,1,0),new Float32Array([0,0,1,0])],[gn(0,0,1,1),new Float32Array([0,0,1,1])],[gn(0,1,0,0),new Float32Array([0,1,0,0])],[gn(0,1,0,1),new Float32Array([0,1,0,1])],[gn(0,1,1,0),new Float32Array([0,1,1,0])],[gn(0,1,1,1),new Float32Array([0,1,1,1])],[gn(1,0,0,0),new Float32Array([1,0,0,0])],[gn(1,0,0,1),new Float32Array([1,0,0,1])],[gn(1,0,1,0),new Float32Array([1,0,1,0])],[gn(1,0,1,1),new Float32Array([1,0,1,1])],[gn(1,1,0,0),new Float32Array([1,1,0,0])],[gn(1,1,0,1),new Float32Array([1,1,0,1])],[gn(1,1,1,0),new Float32Array([1,1,1,0])],[gn(1,1,1,1),new Float32Array([1,1,1,1])]]);function vu(t,e,n){return t+(e-t)*n}function gn(t,e,n,i){let s=vu(t,e,.75),r=vu(n,i,1-.25);return vu(s,r,1-.125)}var Pu=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},L=(t,e,n)=>(Pu(t,e,"read from private field"),n?n.call(t):e.get(t)),tt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},sn=(t,e,n,i)=>(Pu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),ty=(t,e,n,i)=>({set _(s){sn(t,e,s,n)},get _(){return L(t,e,i)}}),at=(t,e,n)=>(Pu(t,e,"access private method"),n),ct=new Uint8Array(8),fi=new DataView(ct.buffer),Jt=t=>[(t%256+256)%256],vt=t=>(fi.setUint16(0,t,!1),[ct[0],ct[1]]),ny=t=>(fi.setInt16(0,t,!1),[ct[0],ct[1]]),ad=t=>(fi.setUint32(0,t,!1),[ct[1],ct[2],ct[3]]),be=t=>(fi.setUint32(0,t,!1),[ct[0],ct[1],ct[2],ct[3]]),iy=t=>(fi.setInt32(0,t,!1),[ct[0],ct[1],ct[2],ct[3]]),Ts=t=>(fi.setUint32(0,Math.floor(t/2**32),!1),fi.setUint32(4,t,!1),[ct[0],ct[1],ct[2],ct[3],ct[4],ct[5],ct[6],ct[7]]),Iu=t=>(fi.setInt16(0,2**8*t,!1),[ct[0],ct[1]]),ui=t=>(fi.setInt32(0,2**16*t,!1),[ct[0],ct[1],ct[2],ct[3]]),bu=t=>(fi.setInt32(0,2**30*t,!1),[ct[0],ct[1],ct[2],ct[3]]),Hn=(t,e=!1)=>{let n=Array(t.length).fill(null).map((i,s)=>t.charCodeAt(s));return e&&n.push(0),n},To=t=>t&&t[t.length-1],Uu=t=>{let e;for(let n of t)(!e||n.presentationTimestamp>e.presentationTimestamp)&&(e=n);return e},hi=(t,e,n=!0)=>{let i=t*e;return n?Math.round(i):i},od=t=>{let e=t*(Math.PI/180),n=Math.cos(e),i=Math.sin(e);return[n,i,0,-i,n,0,0,0,1]},ld=od(0),cd=t=>[ui(t[0]),ui(t[1]),bu(t[2]),ui(t[3]),ui(t[4]),bu(t[5]),ui(t[6]),ui(t[7]),bu(t[8])],Jr=t=>!t||typeof t!="object"?t:Array.isArray(t)?t.map(Jr):Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Jr(n)])),gr=t=>t>=0&&t<2**32,Yt=(t,e,n)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:n}),Ut=(t,e,n,i,s)=>Yt(t,[Jt(e),ad(n),i??[]],s),sy=t=>{let e=512;return t.fragmented?Yt("ftyp",[Hn("iso5"),be(e),Hn("iso5"),Hn("iso6"),Hn("mp41")]):Yt("ftyp",[Hn("isom"),be(e),Hn("isom"),t.holdsAvc?Hn("avc1"):[],Hn("mp41")])},Mu=t=>({type:"mdat",largeSize:t}),ry=t=>({type:"free",size:t}),Mo=(t,e,n=!1)=>Yt("moov",null,[ay(e,t),...t.map(i=>oy(i,e)),n?Oy(t):null]),ay=(t,e)=>{let n=hi(Math.max(0,...e.filter(a=>a.samples.length>0).map(a=>{let o=Uu(a.samples);return o.presentationTimestamp+o.duration})),wu),i=Math.max(...e.map(a=>a.id))+1,s=!gr(t)||!gr(n),r=s?Ts:be;return Ut("mvhd",+s,0,[r(t),r(t),be(wu),r(n),ui(1),Iu(1),Array(10).fill(0),cd(ld),Array(24).fill(0),be(i)])},oy=(t,e)=>Yt("trak",null,[ly(t,e),cy(t,e)]),ly=(t,e)=>{let n=Uu(t.samples),i=hi(n?n.presentationTimestamp+n.duration:0,wu),s=!gr(e)||!gr(i),r=s?Ts:be,a;return t.info.type==="video"?a=typeof t.info.rotation=="number"?od(t.info.rotation):t.info.rotation:a=ld,Ut("tkhd",+s,3,[r(e),r(e),be(t.id),be(0),r(i),Array(8).fill(0),vt(0),vt(0),Iu(t.info.type==="audio"?1:0),vt(0),cd(a),ui(t.info.type==="video"?t.info.width:0),ui(t.info.type==="video"?t.info.height:0)])},cy=(t,e)=>Yt("mdia",null,[uy(t,e),hy(t.info.type==="video"?"vide":"soun"),fy(t)]),uy=(t,e)=>{let n=Uu(t.samples),i=hi(n?n.presentationTimestamp+n.duration:0,t.timescale),s=!gr(e)||!gr(i),r=s?Ts:be;return Ut("mdhd",+s,0,[r(e),r(e),be(t.timescale),r(i),vt(21956),vt(0)])},hy=t=>Ut("hdlr",0,0,[Hn("mhlr"),Hn(t),be(0),be(0),be(0),Hn("mp4-muxer-hdlr",!0)]),fy=t=>Yt("minf",null,[t.info.type==="video"?dy():py(),my(),xy(t)]),dy=()=>Ut("vmhd",0,1,[vt(0),vt(0),vt(0),vt(0)]),py=()=>Ut("smhd",0,0,[vt(0),vt(0)]),my=()=>Yt("dinf",null,[gy()]),gy=()=>Ut("dref",0,0,[be(1)],[vy()]),vy=()=>Ut("url ",0,1),xy=t=>{let e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(n=>n.sampleCompositionTimeOffset!==0);return Yt("stbl",null,[yy(t),Iy(t),Uy(t),By(t),Ly(t),Ny(t),e?Fy(t):null])},yy=t=>Ut("stsd",0,0,[be(1)],[t.info.type==="video"?Sy(Ky[t.info.codec],t):Ry(Zy[t.info.codec],t)]),Sy=(t,e)=>Yt(t,[Array(6).fill(0),vt(1),vt(0),vt(0),Array(12).fill(0),vt(e.info.width),vt(e.info.height),be(4718592),be(4718592),be(0),vt(1),Array(32).fill(0),vt(24),ny(65535)],[Qy[e.info.codec](e),e.info.decoderConfig.colorSpace?_y(e):null]),by={bt709:1,bt470bg:5,smpte170m:6},My={bt709:1,smpte170m:6,"iec61966-2-1":13},Ay={rgb:0,bt709:1,bt470bg:5,smpte170m:6},_y=t=>Yt("colr",[Hn("nclx"),vt(by[t.info.decoderConfig.colorSpace.primaries]),vt(My[t.info.decoderConfig.colorSpace.transfer]),vt(Ay[t.info.decoderConfig.colorSpace.matrix]),Jt((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),wy=t=>t.info.decoderConfig&&Yt("avcC",[...new Uint8Array(t.info.decoderConfig.description)]),Ey=t=>t.info.decoderConfig&&Yt("hvcC",[...new Uint8Array(t.info.decoderConfig.description)]),Ty=t=>{if(!t.info.decoderConfig)return null;let e=t.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let n=e.codec.split("."),i=Number(n[1]),s=Number(n[2]),o=(Number(n[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return Ut("vpcC",1,0,[Jt(i),Jt(s),Jt(o),Jt(2),Jt(2),Jt(2),vt(0)])},Cy=()=>{let n=(1<<7)+1;return Yt("av1C",[n,0,0,0])},Ry=(t,e)=>Yt(t,[Array(6).fill(0),vt(1),vt(0),vt(0),be(0),vt(e.info.numberOfChannels),vt(16),vt(0),vt(0),ui(e.info.sampleRate)],[Jy[e.info.codec](e)]),Dy=t=>{let e=new Uint8Array(t.info.decoderConfig.description);return Ut("esds",0,0,[be(58753152),Jt(32+e.byteLength),vt(1),Jt(0),be(75530368),Jt(18+e.byteLength),Jt(64),Jt(21),ad(0),be(130071),be(130071),be(92307584),Jt(e.byteLength),...e,be(109084800),Jt(1),Jt(2)])},Py=t=>{let e=3840,n=0,i=t.info.decoderConfig?.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");let s=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=s.getUint16(10,!0),n=s.getInt16(14,!0)}return Yt("dOps",[Jt(0),Jt(t.info.numberOfChannels),vt(e),be(t.info.sampleRate),Iu(n),Jt(0)])},Iy=t=>Ut("stts",0,0,[be(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[be(e.sampleCount),be(e.sampleDelta)])]),Uy=t=>{if(t.samples.every(n=>n.type==="key"))return null;let e=[...t.samples.entries()].filter(([,n])=>n.type==="key");return Ut("stss",0,0,[be(e.length),e.map(([n])=>be(n+1))])},By=t=>Ut("stsc",0,0,[be(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[be(e.firstChunk),be(e.samplesPerChunk),be(1)])]),Ly=t=>Ut("stsz",0,0,[be(0),be(t.samples.length),t.samples.map(e=>be(e.size))]),Ny=t=>t.finalizedChunks.length>0&&To(t.finalizedChunks).offset>=2**32?Ut("co64",0,0,[be(t.finalizedChunks.length),t.finalizedChunks.map(e=>Ts(e.offset))]):Ut("stco",0,0,[be(t.finalizedChunks.length),t.finalizedChunks.map(e=>be(e.offset))]),Fy=t=>Ut("ctts",0,0,[be(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[be(e.sampleCount),be(e.sampleCompositionTimeOffset)])]),Oy=t=>Yt("mvex",null,t.map(ky)),ky=t=>Ut("trex",0,0,[be(t.id),be(1),be(0),be(0),be(0)]),rd=(t,e)=>Yt("moof",null,[Hy(t),...e.map(zy)]),Hy=t=>Ut("mfhd",0,0,[be(t)]),ud=t=>{let e=0,n=0,i=0,s=0,r=t.type==="delta";return n|=+r,r?e|=1:e|=2,e<<24|n<<16|i<<8|s},zy=t=>Yt("traf",null,[Gy(t),Vy(t),Wy(t)]),Gy=t=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let n=t.currentChunk.samples[1]??t.currentChunk.samples[0],i={duration:n.timescaleUnitsToNextSample,size:n.size,flags:ud(n)};return Ut("tfhd",0,e,[be(t.id),be(i.duration),be(i.size),be(i.flags)])},Vy=t=>Ut("tfdt",1,0,[Ts(hi(t.currentChunk.startTimestamp,t.timescale))]),Wy=t=>{let e=t.currentChunk.samples.map(x=>x.timescaleUnitsToNextSample),n=t.currentChunk.samples.map(x=>x.size),i=t.currentChunk.samples.map(ud),s=t.currentChunk.samples.map(x=>hi(x.presentationTimestamp-x.decodeTimestamp,t.timescale)),r=new Set(e),a=new Set(n),o=new Set(i),l=new Set(s),c=o.size===2&&i[0]!==i[1],h=r.size>1,u=a.size>1,f=!c&&o.size>1,d=l.size>1||[...l].some(x=>x!==0),g=0;return g|=1,g|=4*+c,g|=256*+h,g|=512*+u,g|=1024*+f,g|=2048*+d,Ut("trun",1,g,[be(t.currentChunk.samples.length),be(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?be(i[0]):[],t.currentChunk.samples.map((x,m)=>[h?be(e[m]):[],u?be(n[m]):[],f?be(i[m]):[],d?iy(s[m]):[]])])},Xy=t=>Yt("mfra",null,[...t.map(Yy),qy()]),Yy=(t,e)=>Ut("tfra",1,0,[be(t.id),be(63),be(t.finalizedChunks.length),t.finalizedChunks.map(i=>[Ts(hi(i.startTimestamp,t.timescale)),Ts(i.moofOffset),be(e+1),be(1),be(1)])]),qy=()=>Ut("mfro",0,0,[be(0)]),Ky={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},Qy={avc:wy,hevc:Ey,vp9:Ty,av1:Cy},Zy={aac:"mp4a",opus:"Opus"},Jy={aac:Dy,opus:Py};var Uo=class{},Bu=class extends Uo{constructor(){super(...arguments),this.buffer=null}},hd=class extends Uo{constructor(t){if(super(),this.options=t,typeof t!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(t.onData){if(typeof t.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(t.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},jy=class extends Uo{constructor(t,e){if(super(),this.stream=t,this.options=e,!(t instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Ms,dr,fd=class{constructor(){this.pos=0,tt(this,Ms,new Uint8Array(8)),tt(this,dr,new DataView(L(this,Ms).buffer)),this.offsets=new WeakMap}seek(t){this.pos=t}writeU32(t){L(this,dr).setUint32(0,t,!1),this.write(L(this,Ms).subarray(0,4))}writeU64(t){L(this,dr).setUint32(0,Math.floor(t/2**32),!1),L(this,dr).setUint32(4,t,!1),this.write(L(this,Ms).subarray(0,8))}writeAscii(t){for(let e=0;e<t.length;e++)L(this,dr).setUint8(e%8,t.charCodeAt(e)),e%8===7&&this.write(L(this,Ms));t.length%8!==0&&this.write(L(this,Ms).subarray(0,t.length%8))}writeBox(t){if(this.offsets.set(t,this.pos),t.contents&&!t.children)this.writeBoxHeader(t,t.size??t.contents.byteLength+8),this.write(t.contents);else{let e=this.pos;if(this.writeBoxHeader(t,0),t.contents&&this.write(t.contents),t.children)for(let s of t.children)s&&this.writeBox(s);let n=this.pos,i=t.size??n-e;this.seek(e),this.writeBoxHeader(t,i),this.seek(n)}}writeBoxHeader(t,e){this.writeU32(t.largeSize?1:e),this.writeAscii(t.type),t.largeSize&&this.writeU64(e)}measureBoxHeader(t){return 8+(t.largeSize?8:0)}patchBox(t){let e=this.pos;this.seek(this.offsets.get(t)),this.writeBox(t),this.seek(e)}measureBox(t){if(t.contents&&!t.children)return this.measureBoxHeader(t)+t.contents.byteLength;{let e=this.measureBoxHeader(t);if(t.contents&&(e+=t.contents.byteLength),t.children)for(let n of t.children)n&&(e+=this.measureBox(n));return e}}};Ms=new WeakMap;dr=new WeakMap;var Ao,Es,na,Qr,_o,Au,$y=class extends fd{constructor(t){super(),tt(this,_o),tt(this,Ao,void 0),tt(this,Es,new ArrayBuffer(2**16)),tt(this,na,new Uint8Array(L(this,Es))),tt(this,Qr,0),sn(this,Ao,t)}write(t){at(this,_o,Au).call(this,this.pos+t.byteLength),L(this,na).set(t,this.pos),this.pos+=t.byteLength,sn(this,Qr,Math.max(L(this,Qr),this.pos))}finalize(){at(this,_o,Au).call(this,this.pos),L(this,Ao).buffer=L(this,Es).slice(0,Math.max(L(this,Qr),this.pos))}};Ao=new WeakMap;Es=new WeakMap;na=new WeakMap;Qr=new WeakMap;_o=new WeakSet;Au=function(t){let e=L(this,Es).byteLength;for(;e<t;)e*=2;if(e===L(this,Es).byteLength)return;let n=new ArrayBuffer(e),i=new Uint8Array(n);i.set(L(this,na),0),sn(this,Es,n),sn(this,na,i)};var eS=2**24,tS=2,jr,As,Zr,Li,In,Co,_u,Lu,dd,Nu,pd,$r,Ro,Fu=class extends fd{constructor(t){super(),tt(this,Co),tt(this,Lu),tt(this,Nu),tt(this,$r),tt(this,jr,void 0),tt(this,As,[]),tt(this,Zr,void 0),tt(this,Li,void 0),tt(this,In,[]),sn(this,jr,t),sn(this,Zr,t.options?.chunked??!1),sn(this,Li,t.options?.chunkSize??eS)}write(t){L(this,As).push({data:t.slice(),start:this.pos}),this.pos+=t.byteLength}flush(){if(L(this,As).length===0)return;let t=[],e=[...L(this,As)].sort((n,i)=>n.start-i.start);t.push({start:e[0].start,size:e[0].data.byteLength});for(let n=1;n<e.length;n++){let i=t[t.length-1],s=e[n];s.start<=i.start+i.size?i.size=Math.max(i.size,s.start+s.data.byteLength-i.start):t.push({start:s.start,size:s.data.byteLength})}for(let n of t){n.data=new Uint8Array(n.size);for(let i of L(this,As))n.start<=i.start&&i.start<n.start+n.size&&n.data.set(i.data,i.start-n.start);L(this,Zr)?(at(this,Co,_u).call(this,n.data,n.start),at(this,$r,Ro).call(this)):L(this,jr).options.onData?.(n.data,n.start)}L(this,As).length=0}finalize(){L(this,Zr)&&at(this,$r,Ro).call(this,!0)}};jr=new WeakMap;As=new WeakMap;Zr=new WeakMap;Li=new WeakMap;In=new WeakMap;Co=new WeakSet;_u=function(t,e){let n=L(this,In).findIndex(o=>o.start<=e&&e<o.start+L(this,Li));n===-1&&(n=at(this,Nu,pd).call(this,e));let i=L(this,In)[n],s=e-i.start,r=t.subarray(0,Math.min(L(this,Li)-s,t.byteLength));i.data.set(r,s);let a={start:s,end:s+r.byteLength};if(at(this,Lu,dd).call(this,i,a),i.written[0].start===0&&i.written[0].end===L(this,Li)&&(i.shouldFlush=!0),L(this,In).length>tS){for(let o=0;o<L(this,In).length-1;o++)L(this,In)[o].shouldFlush=!0;at(this,$r,Ro).call(this)}r.byteLength<t.byteLength&&at(this,Co,_u).call(this,t.subarray(r.byteLength),e+r.byteLength)};Lu=new WeakSet;dd=function(t,e){let n=0,i=t.written.length-1,s=-1;for(;n<=i;){let r=Math.floor(n+(i-n+1)/2);t.written[r].start<=e.start?(n=r+1,s=r):i=r-1}for(t.written.splice(s+1,0,e),(s===-1||t.written[s].end<e.start)&&s++;s<t.written.length-1&&t.written[s].end>=t.written[s+1].start;)t.written[s].end=Math.max(t.written[s].end,t.written[s+1].end),t.written.splice(s+1,1)};Nu=new WeakSet;pd=function(t){let n={start:Math.floor(t/L(this,Li))*L(this,Li),data:new Uint8Array(L(this,Li)),written:[],shouldFlush:!1};return L(this,In).push(n),L(this,In).sort((i,s)=>i.start-s.start),L(this,In).indexOf(n)};$r=new WeakSet;Ro=function(t=!1){for(let e=0;e<L(this,In).length;e++){let n=L(this,In)[e];if(!(!n.shouldFlush&&!t)){for(let i of n.written)L(this,jr).options.onData?.(n.data.subarray(i.start,i.end),n.start+i.start);L(this,In).splice(e--,1)}}};var nS=class extends Fu{constructor(t){super(new hd({onData:(e,n)=>t.stream.write({type:"write",data:e,position:n}),chunked:!0,chunkSize:t.options?.chunkSize}))}},wu=1e3,iS=["avc","hevc","vp9","av1"],sS=["aac","opus"],rS=2082844800,aS=["strict","offset","cross-track-offset"],Be,Oe,Do,Pn,cn,nn,pr,mr,Ou,_s,ws,ea,Eu,md,Tu,gd,ku,vd,Cu,xd,Hu,yd,wo,Ru,ci,Bi,zu,Sd,ta,Po,Io,Gu,vr,ia,Eo,Du,bd=class{constructor(t){if(tt(this,Eu),tt(this,Tu),tt(this,ku),tt(this,Cu),tt(this,Hu),tt(this,wo),tt(this,ci),tt(this,zu),tt(this,ta),tt(this,Io),tt(this,vr),tt(this,Eo),tt(this,Be,void 0),tt(this,Oe,void 0),tt(this,Do,void 0),tt(this,Pn,void 0),tt(this,cn,null),tt(this,nn,null),tt(this,pr,Math.floor(Date.now()/1e3)+rS),tt(this,mr,[]),tt(this,Ou,1),tt(this,_s,[]),tt(this,ws,[]),tt(this,ea,!1),at(this,Eu,md).call(this,t),t.video=Jr(t.video),t.audio=Jr(t.audio),t.fastStart=Jr(t.fastStart),this.target=t.target,sn(this,Be,{firstTimestampBehavior:"strict",...t}),t.target instanceof Bu)sn(this,Oe,new $y(t.target));else if(t.target instanceof hd)sn(this,Oe,new Fu(t.target));else if(t.target instanceof jy)sn(this,Oe,new nS(t.target));else throw new Error(`Invalid target: ${t.target}`);at(this,Cu,xd).call(this),at(this,Tu,gd).call(this)}addVideoChunk(t,e,n,i){if(!(t instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let s=new Uint8Array(t.byteLength);t.copyTo(s),this.addVideoChunkRaw(s,t.type,n??t.timestamp,t.duration,e,i)}addVideoChunkRaw(t,e,n,i,s,r){if(!(t instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(r!==void 0&&!Number.isFinite(r))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(at(this,Eo,Du).call(this),!L(this,Be).video)throw new Error("No video track declared.");if(typeof L(this,Be).fastStart=="object"&&L(this,cn).samples.length===L(this,Be).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${L(this,Be).fastStart.expectedVideoChunks}).`);let a=at(this,wo,Ru).call(this,L(this,cn),t,e,n,i,s,r);if(L(this,Be).fastStart==="fragmented"&&L(this,nn)){for(;L(this,ws).length>0&&L(this,ws)[0].decodeTimestamp<=a.decodeTimestamp;){let o=L(this,ws).shift();at(this,ci,Bi).call(this,L(this,nn),o)}a.decodeTimestamp<=L(this,nn).lastDecodeTimestamp?at(this,ci,Bi).call(this,L(this,cn),a):L(this,_s).push(a)}else at(this,ci,Bi).call(this,L(this,cn),a)}addAudioChunk(t,e,n){if(!(t instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(t.byteLength);t.copyTo(i),this.addAudioChunkRaw(i,t.type,n??t.timestamp,t.duration,e)}addAudioChunkRaw(t,e,n,i,s){if(!(t instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(at(this,Eo,Du).call(this),!L(this,Be).audio)throw new Error("No audio track declared.");if(typeof L(this,Be).fastStart=="object"&&L(this,nn).samples.length===L(this,Be).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${L(this,Be).fastStart.expectedAudioChunks}).`);let r=at(this,wo,Ru).call(this,L(this,nn),t,e,n,i,s);if(L(this,Be).fastStart==="fragmented"&&L(this,cn)){for(;L(this,_s).length>0&&L(this,_s)[0].decodeTimestamp<=r.decodeTimestamp;){let a=L(this,_s).shift();at(this,ci,Bi).call(this,L(this,cn),a)}r.decodeTimestamp<=L(this,cn).lastDecodeTimestamp?at(this,ci,Bi).call(this,L(this,nn),r):L(this,ws).push(r)}else at(this,ci,Bi).call(this,L(this,nn),r)}finalize(){if(L(this,ea))throw new Error("Cannot finalize a muxer more than once.");if(L(this,Be).fastStart==="fragmented"){for(let e of L(this,_s))at(this,ci,Bi).call(this,L(this,cn),e);for(let e of L(this,ws))at(this,ci,Bi).call(this,L(this,nn),e);at(this,Io,Gu).call(this,!1)}else L(this,cn)&&at(this,ta,Po).call(this,L(this,cn)),L(this,nn)&&at(this,ta,Po).call(this,L(this,nn));let t=[L(this,cn),L(this,nn)].filter(Boolean);if(L(this,Be).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let s=Mo(t,L(this,pr)),r=L(this,Oe).measureBox(s);e=L(this,Oe).measureBox(L(this,Pn));let a=L(this,Oe).pos+r+e;for(let o of L(this,mr)){o.offset=a;for(let{data:l}of o.samples)a+=l.byteLength,e+=l.byteLength}if(a<2**32)break;e>=2**32&&(L(this,Pn).largeSize=!0)}let n=Mo(t,L(this,pr));L(this,Oe).writeBox(n),L(this,Pn).size=e,L(this,Oe).writeBox(L(this,Pn));for(let i of L(this,mr))for(let s of i.samples)L(this,Oe).write(s.data),s.data=null}else if(L(this,Be).fastStart==="fragmented"){let e=L(this,Oe).pos,n=Xy(t);L(this,Oe).writeBox(n);let i=L(this,Oe).pos-e;L(this,Oe).seek(L(this,Oe).pos-4),L(this,Oe).writeU32(i)}else{let e=L(this,Oe).offsets.get(L(this,Pn)),n=L(this,Oe).pos-e;L(this,Pn).size=n,L(this,Pn).largeSize=n>=2**32,L(this,Oe).patchBox(L(this,Pn));let i=Mo(t,L(this,pr));if(typeof L(this,Be).fastStart=="object"){L(this,Oe).seek(L(this,Do)),L(this,Oe).writeBox(i);let s=e-L(this,Oe).pos;L(this,Oe).writeBox(ry(s))}else L(this,Oe).writeBox(i)}at(this,vr,ia).call(this),L(this,Oe).finalize(),sn(this,ea,!0)}};Be=new WeakMap;Oe=new WeakMap;Do=new WeakMap;Pn=new WeakMap;cn=new WeakMap;nn=new WeakMap;pr=new WeakMap;mr=new WeakMap;Ou=new WeakMap;_s=new WeakMap;ws=new WeakMap;ea=new WeakMap;Eu=new WeakSet;md=function(t){if(typeof t!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(t.target instanceof Uo))throw new TypeError("The target must be provided and an instance of Target.");if(t.video){if(!iS.includes(t.video.codec))throw new TypeError(`Unsupported video codec: ${t.video.codec}`);if(!Number.isInteger(t.video.width)||t.video.width<=0)throw new TypeError(`Invalid video width: ${t.video.width}. Must be a positive integer.`);if(!Number.isInteger(t.video.height)||t.video.height<=0)throw new TypeError(`Invalid video height: ${t.video.height}. Must be a positive integer.`);let e=t.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(n=>typeof n!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(t.video.frameRate!==void 0&&(!Number.isInteger(t.video.frameRate)||t.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.video.frameRate}. Must be a positive integer.`)}if(t.audio){if(!sS.includes(t.audio.codec))throw new TypeError(`Unsupported audio codec: ${t.audio.codec}`);if(!Number.isInteger(t.audio.numberOfChannels)||t.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${t.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(t.audio.sampleRate)||t.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${t.audio.sampleRate}. Must be a positive integer.`)}if(t.firstTimestampBehavior&&!aS.includes(t.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${t.firstTimestampBehavior}`);if(typeof t.fastStart=="object"){if(t.video){if(t.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(t.fastStart.expectedVideoChunks)||t.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(t.audio){if(t.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(t.fastStart.expectedAudioChunks)||t.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(t.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(t.minFragmentDuration!==void 0&&(!Number.isFinite(t.minFragmentDuration)||t.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};Tu=new WeakSet;gd=function(){if(L(this,Oe).writeBox(sy({holdsAvc:L(this,Be).video?.codec==="avc",fragmented:L(this,Be).fastStart==="fragmented"})),sn(this,Do,L(this,Oe).pos),L(this,Be).fastStart==="in-memory")sn(this,Pn,Mu(!1));else if(L(this,Be).fastStart!=="fragmented"){if(typeof L(this,Be).fastStart=="object"){let t=at(this,ku,vd).call(this);L(this,Oe).seek(L(this,Oe).pos+t)}sn(this,Pn,Mu(!0)),L(this,Oe).writeBox(L(this,Pn))}at(this,vr,ia).call(this)};ku=new WeakSet;vd=function(){if(typeof L(this,Be).fastStart!="object")return;let t=0,e=[L(this,Be).fastStart.expectedVideoChunks,L(this,Be).fastStart.expectedAudioChunks];for(let n of e)n&&(t+=8*Math.ceil(2/3*n),t+=4*n,t+=12*Math.ceil(2/3*n),t+=4*n,t+=8*n);return t+=4096,t};Cu=new WeakSet;xd=function(){if(L(this,Be).video&&sn(this,cn,{id:1,info:{type:"video",codec:L(this,Be).video.codec,width:L(this,Be).video.width,height:L(this,Be).video.height,rotation:L(this,Be).video.rotation??0,decoderConfig:null},timescale:L(this,Be).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),L(this,Be).audio&&(sn(this,nn,{id:L(this,Be).video?2:1,info:{type:"audio",codec:L(this,Be).audio.codec,numberOfChannels:L(this,Be).audio.numberOfChannels,sampleRate:L(this,Be).audio.sampleRate,decoderConfig:null},timescale:L(this,Be).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),L(this,Be).audio.codec==="aac")){let t=at(this,Hu,yd).call(this,2,L(this,Be).audio.sampleRate,L(this,Be).audio.numberOfChannels);L(this,nn).info.decoderConfig={codec:L(this,Be).audio.codec,description:t,numberOfChannels:L(this,Be).audio.numberOfChannels,sampleRate:L(this,Be).audio.sampleRate}}};Hu=new WeakSet;yd=function(t,e,n){let s=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),r=n,a="";a+=t.toString(2).padStart(5,"0"),a+=s.toString(2).padStart(4,"0"),s===15&&(a+=e.toString(2).padStart(24,"0")),a+=r.toString(2).padStart(4,"0");let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,"0");let l=new Uint8Array(a.length/8);for(let c=0;c<a.length;c+=8)l[c/8]=parseInt(a.slice(c,c+8),2);return l};wo=new WeakSet;Ru=function(t,e,n,i,s,r,a){let o=i/1e6,l=(i-(a??0))/1e6,c=s/1e6,h=at(this,zu,Sd).call(this,o,l,t);return o=h.presentationTimestamp,l=h.decodeTimestamp,r?.decoderConfig&&(t.info.decoderConfig===null?t.info.decoderConfig=r.decoderConfig:Object.assign(t.info.decoderConfig,r.decoderConfig)),{presentationTimestamp:o,decodeTimestamp:l,duration:c,data:e,size:e.byteLength,type:n,timescaleUnitsToNextSample:hi(c,t.timescale)}};ci=new WeakSet;Bi=function(t,e){L(this,Be).fastStart!=="fragmented"&&t.samples.push(e);let n=hi(e.presentationTimestamp-e.decodeTimestamp,t.timescale);if(t.lastTimescaleUnits!==null){let s=hi(e.decodeTimestamp,t.timescale,!1),r=Math.round(s-t.lastTimescaleUnits);if(t.lastTimescaleUnits+=r,t.lastSample.timescaleUnitsToNextSample=r,L(this,Be).fastStart!=="fragmented"){let a=To(t.timeToSampleTable);a.sampleCount===1?(a.sampleDelta=r,a.sampleCount++):a.sampleDelta===r?a.sampleCount++:(a.sampleCount--,t.timeToSampleTable.push({sampleCount:2,sampleDelta:r}));let o=To(t.compositionTimeOffsetTable);o.sampleCompositionTimeOffset===n?o.sampleCount++:t.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n})}}else t.lastTimescaleUnits=0,L(this,Be).fastStart!=="fragmented"&&(t.timeToSampleTable.push({sampleCount:1,sampleDelta:hi(e.duration,t.timescale)}),t.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n}));t.lastSample=e;let i=!1;if(!t.currentChunk)i=!0;else{let s=e.presentationTimestamp-t.currentChunk.startTimestamp;if(L(this,Be).fastStart==="fragmented"){let r=L(this,cn)??L(this,nn),a=L(this,Be).minFragmentDuration??1;t===r&&e.type==="key"&&s>=a&&(i=!0,at(this,Io,Gu).call(this))}else i=s>=.5}i&&(t.currentChunk&&at(this,ta,Po).call(this,t),t.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),t.currentChunk.samples.push(e)};zu=new WeakSet;Sd=function(t,e,n){let i=L(this,Be).firstTimestampBehavior==="strict",s=n.lastDecodeTimestamp===-1;if(i&&s&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(L(this,Be).firstTimestampBehavior==="offset"||L(this,Be).firstTimestampBehavior==="cross-track-offset"){n.firstDecodeTimestamp===void 0&&(n.firstDecodeTimestamp=e);let a;L(this,Be).firstTimestampBehavior==="offset"?a=n.firstDecodeTimestamp:a=Math.min(L(this,cn)?.firstDecodeTimestamp??1/0,L(this,nn)?.firstDecodeTimestamp??1/0),e-=a,t-=a}if(e<n.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${n.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return n.lastDecodeTimestamp=e,{presentationTimestamp:t,decodeTimestamp:e}};ta=new WeakSet;Po=function(t){if(L(this,Be).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(t.currentChunk){if(t.finalizedChunks.push(t.currentChunk),L(this,mr).push(t.currentChunk),(t.compactlyCodedChunkTable.length===0||To(t.compactlyCodedChunkTable).samplesPerChunk!==t.currentChunk.samples.length)&&t.compactlyCodedChunkTable.push({firstChunk:t.finalizedChunks.length,samplesPerChunk:t.currentChunk.samples.length}),L(this,Be).fastStart==="in-memory"){t.currentChunk.offset=0;return}t.currentChunk.offset=L(this,Oe).pos;for(let e of t.currentChunk.samples)L(this,Oe).write(e.data),e.data=null;at(this,vr,ia).call(this)}};Io=new WeakSet;Gu=function(t=!0){if(L(this,Be).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[L(this,cn),L(this,nn)].filter(o=>o&&o.currentChunk);if(e.length===0)return;let n=ty(this,Ou)._++;if(n===1){let o=Mo(e,L(this,pr),!0);L(this,Oe).writeBox(o)}let i=L(this,Oe).pos,s=rd(n,e);L(this,Oe).writeBox(s);{let o=Mu(!1),l=0;for(let h of e)for(let u of h.currentChunk.samples)l+=u.size;let c=L(this,Oe).measureBox(o)+l;c>=2**32&&(o.largeSize=!0,c=L(this,Oe).measureBox(o)+l),o.size=c,L(this,Oe).writeBox(o)}for(let o of e){o.currentChunk.offset=L(this,Oe).pos,o.currentChunk.moofOffset=i;for(let l of o.currentChunk.samples)L(this,Oe).write(l.data),l.data=null}let r=L(this,Oe).pos;L(this,Oe).seek(L(this,Oe).offsets.get(s));let a=rd(n,e);L(this,Oe).writeBox(a),L(this,Oe).seek(r);for(let o of e)o.finalizedChunks.push(o.currentChunk),L(this,mr).push(o.currentChunk),o.currentChunk=null;t&&at(this,vr,ia).call(this)};vr=new WeakSet;ia=function(){L(this,Oe)instanceof Fu&&L(this,Oe).flush()};Eo=new WeakSet;Du=function(){if(L(this,ea))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};var rn=3,oS={color:"#030303",strength:1,widthNear:5.1,widthFar:3.3,distNear:6,distFar:90,creaseScale:.8,depthLo:.01,depthHi:.03,angleLo:35,angleHi:50,concaveGain:.7,farOpacity:.95,fadeNear:150,fadeFar:450},lS=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,cS=`
#include <common>
uniform mat3 cutUv;
varying vec3 vN;
varying vec3 vV;
varying vec2 vCut;
void main() {
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  vN = transformedNormal;
  vCut = (cutUv * vec3(uv, 1.0)).xy;
  #include <begin_vertex>
  #include <project_vertex>
  vV = mvPosition.xyz;
}`,uS=`
uniform sampler2D tCut;
uniform float cut;
varying vec3 vN;
varying vec3 vV;
varying vec2 vCut;
void main() {
  if (cut > 0.0 && texture2D(tCut, vCut).a < cut) discard;
  vec3 n;
  if (dot(vN, vN) < 1e-8) n = normalize(cross(dFdx(vV), dFdy(vV)));   // geometry without normals
  else n = normalize(vN) * (gl_FrontFacing ? 1.0 : -1.0);            // back faces of double-sided planes
  gl_FragColor = vec4(n, 1.0);
}`,hS=`
#include <packing>
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform sampler2D tMainDepth;
uniform vec2 texel;
uniform float cNear;
uniform float cFar;
uniform float p00;
uniform float p11;
uniform float wNear;
uniform float wFar;
uniform float dNear;
uniform float dFar;
uniform float creaseScale;
uniform float depthLo;
uniform float depthHi;
uniform float cosLo;
uniform float cosHi;
uniform float concaveGain;
uniform float farOpacity;
uniform float fadeNear;
uniform float fadeFar;
uniform float strength;
uniform float useMain;
uniform float pxScale;   // output px per 1080x1920 px
uniform vec2 fogRange;   // scene fog near / far (m); far <= near = no fog tint
uniform float fogStart;  // ink stays pure black up to here (m), then tints toward the fog colour
varying vec2 vUv;

// pixel steps along x, y and both diagonals, and their length in px
const vec2 STEP[4] = vec2[4](vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(1.0, 1.0), vec2(1.0, -1.0));
const float SLEN[4] = float[4](1.0, 1.0, 1.41421, 1.41421);
#define RMAX 9   // covers 5.1 px x pxScale 1.333 = 6.8 px at 1440x2560 (+0.5 AA ramp)

// textureLod: explicit LOD inside loops (nearest-filtered targets, no derivatives needed)
float dist(sampler2D t, vec2 uv) { return -perspectiveDepthToViewZ(textureLod(t, uv, 0.0).x, cNear, cFar); }
vec3 viewPos(vec2 uv, float d) { vec2 n = uv * 2.0 - 1.0; return vec3(n.x * d / p00, n.y * d / p11, -d); }

// crease strength between this pixel (n0, P0) and a neighbour
float crease(vec3 n0, vec3 P0, float zc, vec2 uq, float zq) {
  vec4 nq = textureLod(tNormal, uq, 0.0);
  if (nq.a < 0.5 || abs(zq - zc) > zc * depthLo) return 0.0;       // sky / depth jump: not a crease
  float k = 1.0 - smoothstep(cosHi, cosLo, dot(n0, nq.xyz));
  if (dot(viewPos(uq, zq) - P0, n0) > 0.0) k *= concaveGain;        // neighbour in front of our tangent plane: concave
  return k;
}

void main() {
  vec4 nc = textureLod(tNormal, vUv, 0.0);
  if (nc.a < 0.5) { gl_FragColor = vec4(0.0); return; }          // sky / empty: ink lives on the near object only
  float zc = dist(tDepth, vUv);

  // characters, cards etc. (not in the world buffer) in front of this pixel: no world ink over them
  if (useMain > 0.5) {
    float zm = dist(tMainDepth, vUv);
    zm = min(zm, dist(tMainDepth, vUv + vec2(texel.x, 0.0)));
    zm = min(zm, dist(tMainDepth, vUv - vec2(texel.x, 0.0)));
    zm = min(zm, dist(tMainDepth, vUv + vec2(0.0, texel.y)));
    zm = min(zm, dist(tMainDepth, vUv - vec2(0.0, texel.y)));
    if (zm < zc * 0.985 - 0.03) { gl_FragColor = vec4(0.0); return; }
  }

  float t = clamp(log(zc / dNear) / log(dFar / dNear), 0.0, 1.0);
  float w = mix(wNear, wFar, t) * pxScale;           // silhouette line width (output px) at this distance, near side only
  float hc = 0.5 * w * creaseScale;                  // crease line half width (px), drawn on both faces
  float Wc = 1.0 / zc;
  vec3 n0 = nc.xyz;
  vec3 P0 = viewPos(vUv, zc);
  float eD = 0.0, eN = 0.0;
  for (int a = 0; a < 4; a++) {
    for (int r = 1; r <= RMAX; r++) {
      vec2 o = STEP[a] * texel * float(r);
      float d = (float(r) - 0.5) * SLEN[a];          // distance of this pixel's centre to an edge first seen at r
      float cw = clamp(w + 0.5 - d, 0.0, 1.0);       // continuous coverage -> no width popping, built-in AA
      float ch = clamp(hc + 0.5 - d, 0.0, 1.0);
      if (cw <= 0.0 && ch <= 0.0) break;
      float z1 = dist(tDepth, vUv - o), z2 = dist(tDepth, vUv + o);
      // depth jump: this pixel is in front of its neighbours (2nd difference of 1/z < 0; exactly 0 on planes)
      float s = (1.0 / z1 + 1.0 / z2 - 2.0 * Wc) / Wc;
      eD = max(eD, smoothstep(depthLo, depthHi, -s) * cw);
      // crease: normal turns towards a neighbour at the same depth
      if (ch > 0.0) eN = max(eN, max(crease(n0, P0, zc, vUv - o, z1), crease(n0, P0, zc, vUv + o, z2)) * ch);
    }
  }

  float ink = max(eD, eN) * strength * mix(1.0, farOpacity, t) * (1.0 - smoothstep(fadeNear, fadeFar, zc));
  float f0 = max(fogRange.x, fogStart);
  float fogK = fogRange.y > f0 ? clamp((zc - f0) / (fogRange.y - f0), 0.0, 1.0) : 0.0;
  gl_FragColor = vec4(ink, fogK, 0.0, 1.0);
}`,fS=`
uniform sampler2D inputBuffer;
uniform sampler2D tMask;
uniform sampler2D tNormal;
uniform vec2 texel;
uniform vec3 inkColor;
uniform vec3 fogColor;
uniform float fogInk;   // how far fully fogged ink moves toward the fog colour (0.3)
uniform int debug;
varying vec2 vUv;
float m(float x, float y) { return texture2D(tMask, vUv + vec2(x, y) * texel).r; }
void main() {
  float a = (4.0 * m(0.0, 0.0)
    + 2.0 * (m(1.0, 0.0) + m(-1.0, 0.0) + m(0.0, 1.0) + m(0.0, -1.0))
    + m(1.0, 1.0) + m(-1.0, 1.0) + m(1.0, -1.0) + m(-1.0, -1.0)) / 16.0;   // 1-2-1 tent = anti-aliasing
  vec4 c = texture2D(inputBuffer, vUv);
  if (debug == 1) { gl_FragColor = vec4(vec3(1.0 - a), 1.0); return; }               // mask only
  if (debug == 2) { gl_FragColor = vec4(texture2D(tNormal, vUv).xyz * 0.5 + 0.5, 1.0); return; } // world normals
  // blend in display (gamma) space like Canvas2D does for the character drawings: coverage -> darkness is linear
  // on screen, so the measured line widths equal the coverage widths (a linear-light blend reads ~30 % thinner)
  float fk = texture2D(tMask, vUv).g;                       // fog amount of the line (max over the AA footprint)
  fk = max(fk, max(texture2D(tMask, vUv + vec2(texel.x, 0.0)).g, texture2D(tMask, vUv - vec2(texel.x, 0.0)).g));
  fk = max(fk, max(texture2D(tMask, vUv + vec2(0.0, texel.y)).g, texture2D(tMask, vUv - vec2(0.0, texel.y)).g));
  vec3 inkC = mix(inkColor, fogColor, fk * fogInk);
  vec3 g = pow(max(c.rgb, 0.0), vec3(1.0 / 2.2));
  gl_FragColor = vec4(pow(mix(g, pow(inkC, vec3(1.0 / 2.2)), a), vec3(2.2)), c.a);
}`,dS=`
uniform sampler2D tSrc;
varying vec2 vUv;
void main() {
  gl_FragColor = texture2D(tSrc, vUv);
  #include <colorspace_fragment>
}`,Bo=class extends wn{debug=0;world;cam;rt;maskRT;tmpRT;normalMat;maskMat;compMat;copyMat;fsScene=new Ii;fsCam=new rr(-1,1,1,-1,0,1);quad;clearCol=new Te;constructor(e,n,i={}){super("InkPass");let s={...oS,...i};this.world=e,this.cam=n,this.cam.layers.enable(rn),this.needsSwap=!1,this.needsDepthTexture=!0,this.rt=new ht(1,1,{type:ri,minFilter:Wt,magFilter:Wt,generateMipmaps:!1,depthBuffer:!0,samples:0,depthTexture:new Ki(1,1,qn)}),this.maskRT=new ht(1,1,{type:Nt,minFilter:Wt,magFilter:Wt,generateMipmaps:!1,depthBuffer:!1}),this.tmpRT=new ht(1,1,{type:ri,minFilter:Kt,magFilter:Kt,generateMipmaps:!1,depthBuffer:!1}),this.normalMat=new gt({vertexShader:cS,fragmentShader:uS,side:Gt,uniforms:{tCut:{value:null},cut:{value:0},cutUv:{value:new We}}}),this.normalMat.onBeforeRender=(o,l,c,h,u,f)=>{let d=u.material,g=f?.materialIndex??0,x=Array.isArray(d)?d[g]:d,m=this.normalMat.uniforms,p=x&&x.alphaTest>0?x.map:null;m.tCut.value=p,m.cut.value=p?x.alphaTest:0,p&&(p.updateMatrix(),m.cutUv.value.copy(p.matrix)),this.normalMat.uniformsNeedUpdate=!0};let r=(o,l)=>new gt({vertexShader:lS,fragmentShader:o,uniforms:l,depthTest:!1,depthWrite:!1}),a=new fe(1,1);this.maskMat=r(hS,{tNormal:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},tMainDepth:{value:null},texel:{value:a},cNear:{value:.2},cFar:{value:1500},p00:{value:1},p11:{value:1},wNear:{value:s.widthNear},wFar:{value:s.widthFar},dNear:{value:s.distNear},dFar:{value:s.distFar},creaseScale:{value:s.creaseScale},depthLo:{value:s.depthLo},depthHi:{value:s.depthHi},cosLo:{value:Math.cos(s.angleLo*Math.PI/180)},cosHi:{value:Math.cos(s.angleHi*Math.PI/180)},concaveGain:{value:s.concaveGain},farOpacity:{value:s.farOpacity},fadeNear:{value:s.fadeNear},fadeFar:{value:s.fadeFar},strength:{value:s.strength},useMain:{value:0},pxScale:{value:1},fogRange:{value:new fe(0,0)},fogStart:{value:60}}),this.compMat=r(fS,{inputBuffer:{value:null},tMask:{value:this.maskRT.texture},tNormal:{value:this.rt.texture},texel:{value:a},inkColor:{value:new Te(s.color)},debug:{value:0},fogColor:{value:new Te},fogInk:{value:.3}}),this.copyMat=r(dS,{tSrc:{value:this.tmpRT.texture}}),this.quad=new Le(new Dn(2,2),this.maskMat),this.quad.frustumCulled=!1,this.fsScene.add(this.quad)}set(e){let n=this.maskMat.uniforms,i=[["widthNear","wNear"],["widthFar","wFar"],["distNear","dNear"],["distFar","dFar"],["creaseScale","creaseScale"],["depthLo","depthLo"],["depthHi","depthHi"],["concaveGain","concaveGain"],["farOpacity","farOpacity"],["fadeNear","fadeNear"],["fadeFar","fadeFar"],["strength","strength"]];for(let[s,r]of i)e[s]!==void 0&&(n[r].value=e[s]);e.angleLo!==void 0&&(n.cosLo.value=Math.cos(e.angleLo*Math.PI/180)),e.angleHi!==void 0&&(n.cosHi.value=Math.cos(e.angleHi*Math.PI/180)),e.color!==void 0&&this.compMat.uniforms.inkColor.value.set(e.color)}setDepthTexture(e){this.maskMat.uniforms.tMainDepth.value=e??null,this.maskMat.uniforms.useMain.value=e?1:0}setSize(e,n){this.rt.setSize(e,n),this.maskRT.setSize(e,n),this.tmpRT.setSize(e,n),this.maskMat.uniforms.texel.value.set(1/e,1/n),this.maskMat.uniforms.pxScale.value=n/1920}render(e,n){let i=this.world,s=this.cam,r=e.autoClear,a=e.shadowMap.autoUpdate,o=s.layers.mask,l=i.overrideMaterial,c=i.background;e.getClearColor(this.clearCol);let h=e.getClearAlpha();e.autoClear=!1,s.layers.disable(rn),i.overrideMaterial=this.normalMat,i.background=null,e.shadowMap.autoUpdate=!1,e.setClearColor(0,0),e.setRenderTarget(this.rt),e.clear(!0,!0,!1),e.render(i,s),s.layers.mask=o,i.overrideMaterial=l,i.background=c,e.shadowMap.autoUpdate=a,e.setClearColor(this.clearCol,h);let u=this.maskMat.uniforms,f=s.projectionMatrix.elements;u.cNear.value=s.near,u.cFar.value=s.far,u.p00.value=f[0],u.p11.value=f[5];let d=i.fog;d&&d.isFog?(u.fogRange.value.set(d.near,d.far),this.compMat.uniforms.fogColor.value.copy(d.color)):u.fogRange.value.set(0,0),this.quad.material=this.maskMat,e.setRenderTarget(this.maskRT),e.render(this.fsScene,this.fsCam),this.compMat.uniforms.inputBuffer.value=n.texture,this.compMat.uniforms.debug.value=this.debug,this.quad.material=this.compMat,e.setRenderTarget(this.tmpRT),e.render(this.fsScene,this.fsCam),this.quad.material=this.copyMat,e.setRenderTarget(this.renderToScreen?null:n),e.render(this.fsScene,this.fsCam),e.autoClear=r}dispose(){this.rt.depthTexture?.dispose(),this.rt.dispose(),this.maskRT.dispose(),this.tmpRT.dispose(),this.normalMat.dispose(),this.maskMat.dispose(),this.compMat.dispose(),this.copyMat.dispose(),this.quad.geometry.dispose()}};function Md(t){t.traverse(e=>{let n=e;if(!(n.isMesh||e.isSprite||e.isPoints||e.isLine)||e.layers.mask===1<<rn)return;let i=Array.isArray(n.material)?n.material:[n.material],s=!!n.customDepthMaterial||e.isSprite||e.isPoints||e.isLine,r=i.some(o=>o&&o.depthWrite===!1),a=i.some(o=>o&&o.isMeshBasicMaterial&&o.alphaTest>0);(s||r||a)&&e.layers.set(rn)})}var pS=`
uniform float focus;      // focus distance along the view axis (m)
uniform float cInf;       // blur-disc radius (px at 1080x1920) of things at infinity; 0 = off
uniform float nearScale;  // extra blur for things in front of the focus plane
uniform float maxCoC;     // px at 1080x1920
#define GOLDEN 2.39996323

float cocAt(float d, float s) {               // signed CoC radius in output px
  float c = cInf * s * (1.0 - focus / max(d, 1e-3));
  if (c < 0.0) c *= nearScale;
  return clamp(c, -maxCoC * s, maxCoC * s);
}
float distAt(vec2 uv) { return -getViewZ(readDepth(uv)); }

void mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {
  if (cInf < 0.25) { outputColor = inputColor; return; }
  float s = resolution.y / 1920.0;             // output px per 1080x1920 px
  float d0 = -getViewZ(depth);
  float r0 = abs(cocAt(d0, s));
  float R = r0 * SPREAD;
  vec3 acc = inputColor.rgb; float wsum = 1.0;
  if (R > 0.5) {
    for (int i = 0; i < TAPS; i++) {
      float rr = sqrt((float(i) + 0.5) / float(TAPS)) * R;
      float a = float(i) * GOLDEN + ROT;
      vec2 suv = uv + vec2(cos(a), sin(a)) * rr * texelSize;
      float ds = distAt(suv);
      float rs = abs(cocAt(ds, s)) * SPREAD;
      if (ds > d0) rs = min(rs, R);            // background never bleeds over a nearer pixel
      float w = clamp(rs - rr + 0.5, 0.0, 1.0); // does the sample's disc reach us?
      acc += texture2D(inputBuffer, suv).rgb * w; wsum += w;
    }
  }
  vec3 col = acc / wsum;
#if NEAR_TAPS > 0
  float M = maxCoC * s;
  vec3 fg = vec3(0.0); float fw = 0.0, cov = 0.0;
  for (int i = 0; i < NEAR_TAPS; i++) {
    float rr = sqrt((float(i) + 0.5) / float(NEAR_TAPS)) * M;
    if (rr <= R) continue;                      // already covered by the disc gather
    float a = float(i) * GOLDEN + 1.0;
    vec2 suv = uv + vec2(cos(a), sin(a)) * rr * texelSize;
    float ds = distAt(suv);
    if (ds >= d0 * 0.97) continue;              // only things in front of us
    float rs = abs(cocAt(ds, s));
    float w = clamp(rs - rr + 0.5, 0.0, 1.0);
    fg += texture2D(inputBuffer, suv).rgb * w; fw += w;
    cov += w * (M * M) / max(rs * rs, 1.0);
  }
  if (fw > 0.0) col = mix(col, fg / fw, clamp(cov / float(NEAR_TAPS), 0.0, 1.0));
#endif
  outputColor = vec4(col, inputColor.a);
}`,mS={taps:16,spread:.287,nearTaps:0,rot:.61},Ad={taps:64,spread:.958,nearTaps:32,rot:0},Lo=class extends fr{constructor({maxCoC:e=24,nearScale:n=1.2,stage:i=Ad}={}){super("LensBlurEffect",pS,{blendFunction:Xe.NORMAL,attributes:li.DEPTH|li.CONVOLUTION,defines:new Map([["TAPS",String(i.taps)],["SPREAD",i.spread.toFixed(4)],["NEAR_TAPS",String(i.nearTaps)],["ROT",i.rot.toFixed(4)]]),uniforms:new Map([["focus",new _e(10)],["cInf",new _e(0)],["nearScale",new _e(n)],["maxCoC",new _e(e)]])})}set focus(e){this.uniforms.get("focus").value=e}get focus(){return this.uniforms.get("focus").value}set cInf(e){this.uniforms.get("cInf").value=e}get cInf(){return this.uniforms.get("cInf").value}},No=class{pre;main;constructor({maxCoC:e=24,nearScale:n=1.2}={}){this.pre=new Lo({maxCoC:e,nearScale:n,stage:mS}),this.main=new Lo({maxCoC:e,nearScale:n,stage:Ad})}set focus(e){this.pre.focus=e,this.main.focus=e}set cInf(e){this.pre.cInf=e,this.main.cInf=e}dispose(){this.pre.dispose(),this.main.dispose()}};var gS=`
uniform float gradeKy[7];
uniform float gradeKm[7];
uniform vec3 gradeSat;      // x = shadows, y = mids, z = highlights
uniform vec3 gradeTintS;    // zero-luma RGB offsets (sRGB-encoded units)
uniform vec3 gradeTintM;
uniform vec3 gradeTintH;
uniform vec2 gradeVig;      // x = strength k, y = start radius r0
uniform float gradeAmount;

vec3 gradeEncode(vec3 c) {   // linear -> sRGB
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}
vec3 gradeDecode(vec3 c) {   // sRGB -> linear
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}
float gradeHermite(float v, float x0, float x1, float y0, float y1, float m0, float m1) {
  float h = x1 - x0, t = (v - x0) / h, t2 = t * t, t3 = t2 * t;
  return (2.0 * t3 - 3.0 * t2 + 1.0) * y0 + (t3 - 2.0 * t2 + t) * h * m0 + (-2.0 * t3 + 3.0 * t2) * y1 + (t3 - t2) * h * m1;
}
float gradeCurve(float v) {
  v = clamp(v, 0.0, 1.0);
  if (v < 0.1)  return gradeHermite(v, 0.0, 0.1, gradeKy[0], gradeKy[1], gradeKm[0], gradeKm[1]);
  if (v < 0.25) return gradeHermite(v, 0.1, 0.25, gradeKy[1], gradeKy[2], gradeKm[1], gradeKm[2]);
  if (v < 0.5)  return gradeHermite(v, 0.25, 0.5, gradeKy[2], gradeKy[3], gradeKm[2], gradeKm[3]);
  if (v < 0.75) return gradeHermite(v, 0.5, 0.75, gradeKy[3], gradeKy[4], gradeKm[3], gradeKm[4]);
  if (v < 0.9)  return gradeHermite(v, 0.75, 0.9, gradeKy[4], gradeKy[5], gradeKm[4], gradeKm[5]);
  return gradeHermite(v, 0.9, 1.0, gradeKy[5], gradeKy[6], gradeKm[5], gradeKm[6]);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec3 src = gradeEncode(inputColor.rgb);
  vec3 c = vec3(gradeCurve(src.r), gradeCurve(src.g), gradeCurve(src.b));
  const vec3 W = vec3(0.2126, 0.7152, 0.0722);
  float y = dot(c, W);
  float wS = 1.0 - smoothstep(0.0, 0.55, y);
  float wH = smoothstep(0.45, 1.0, y);
  float wM = 1.0 - wS - wH;
  float s = gradeSat.y + (gradeSat.x - gradeSat.y) * wS + (gradeSat.z - gradeSat.y) * wH;
  c = vec3(y) + s * (c - vec3(y));
  c += wS * gradeTintS + wM * gradeTintM + wH * gradeTintH;
  vec2 p = uv * 2.0 - 1.0;
  float r = length(p) * 0.70710678;
  c *= 1.0 - gradeVig.x * smoothstep(gradeVig.y, 1.0, r);
  c = clamp(c, 0.0, 1.0);
  outputColor = vec4(gradeDecode(mix(src, c, gradeAmount)), inputColor.a);
}`,Vu=[0,-.18733,1.8556],Wu=[1.5748,-.46813,0],xr=(t,e)=>new B(t*Vu[0]+e*Wu[0],t*Vu[1]+e*Wu[1],t*Vu[2]+e*Wu[2]),Xu=[0,.1,.25,.5,.75,.9,1];function _d(t){let e=Xu.length,n=[],i=[],s=new Array(e).fill(0);for(let r=0;r<e-1;r++)n.push(Xu[r+1]-Xu[r]),i.push((t[r+1]-t[r])/n[r]);s[0]=i[0],s[e-1]=i[e-2];for(let r=1;r<e-1;r++){if(i[r-1]*i[r]<=0){s[r]=0;continue}let a=2*n[r]+n[r-1],o=n[r]+2*n[r-1];s[r]=(a+o)/(a/i[r-1]+o/i[r])}return s}var Fo=class extends fr{constructor(e,n=1){super("GradeEffect",gS,{blendFunction:Xe.NORMAL,uniforms:new Map([["gradeKy",new _e(e.ky.slice())],["gradeKm",new _e(_d(e.ky))],["gradeSat",new _e(new B(...e.sat))],["gradeTintS",new _e(xr(...e.tintS))],["gradeTintM",new _e(xr(...e.tintM))],["gradeTintH",new _e(xr(...e.tintH))],["gradeVig",new _e(new fe(...e.vig))],["gradeAmount",new _e(n)]])})}set(e,n,i=0){let s=(o,l)=>o+(l-o)*i,r=n?{ky:e.ky.map((o,l)=>s(o,n.ky[l])),sat:[s(e.sat[0],n.sat[0]),s(e.sat[1],n.sat[1]),s(e.sat[2],n.sat[2])],tintS:[s(e.tintS[0],n.tintS[0]),s(e.tintS[1],n.tintS[1])],tintM:[s(e.tintM[0],n.tintM[0]),s(e.tintM[1],n.tintM[1])],tintH:[s(e.tintH[0],n.tintH[0]),s(e.tintH[1],n.tintH[1])],vig:[s(e.vig[0],n.vig[0]),s(e.vig[1],n.vig[1])]}:e,a=this.uniforms;a.get("gradeKy").value=r.ky.slice(),a.get("gradeKm").value=_d(r.ky),a.get("gradeSat").value.set(...r.sat),a.get("gradeTintS").value=xr(...r.tintS),a.get("gradeTintM").value=xr(...r.tintM),a.get("gradeTintH").value=xr(...r.tintH),a.get("gradeVig").value.set(...r.vig)}get amount(){return this.uniforms.get("gradeAmount").value}set amount(e){this.uniforms.get("gradeAmount").value=e}},vS={ky:[0,.1,.28,.6,.835,.945,1],sat:[1,1.05,1],tintS:[.01,.002],tintM:[0,0],tintH:[.006,0],vig:[.12,.45]},xS={ky:[0,.09,.245,.54,.8,.93,1],sat:[1,1.12,1.15],tintS:[.02,.002],tintM:[0,0],tintH:[-.012,.006],vig:[.2,.4]},Yu={day:vS,golden:xS},yS={day:1,golden:1};function wd(t,e){let n=t;n._light!==e&&(t.set(Yu[e]),n._light=e),t.amount=yS[e]}var di={uLitCol:{value:new B(1.5,1.44,1.32)},uShadeCol:{value:new B(.6,.58,.86)},uShadeLift:{value:new B},uLambert:{value:.35},uSideK:{value:.84},uTerm:{value:.2},uBounce:{value:new B},uSat:{value:1}},sa={uCharTint:{value:new B(1,.94,.92)},uCharShade:{value:.86},uGrad:{value:.07},uBodyGrad:{value:.2},uSideTint:{value:new B(.92,.9,.96)}},Oo=Ke.lights_fragment_begin.replace("directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ]","sunVis = ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ]").replace("vDirectionalShadowCoord[ i ] ) : 1.0;",`vDirectionalShadowCoord[ i ] ) : 1.0;
		directLight.color *= sunVis;`);if(!Oo.includes("directLight.color *= sunVis"))throw new Error("shade.ts: three lights_fragment_begin changed");var SS=`
#if NUM_DIR_LIGHTS > 0
{
  vec3 sunV = directionalLights[ 0 ].direction;                               // view space, towards the sun
  vec3 upV = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
  float ndl = max( dot( geometryNormal, sunV ), 0.0 );
  float sunTerm = sunVis * smoothstep( 0.0, uTerm, ndl );                     // 0 = cast/form shadow, 1 = lit
  float skyK = mix( uSideK, 1.0, 0.5 + 0.5 * dot( geometryNormal, upV ) );    // up-facing a bit brighter
  vec3 lit = uLitCol * mix( 1.0, ndl, uLambert );                             // keep some cosine modelling
  float facing = max( dot( geometryNormal, geometryViewDir ), 0.0 );        // 1 = faces the lens
  vec3 alb = max( mix( vec3( dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), diffuseColor.rgb, uSat ), 0.0 );
  reflectedLight.directDiffuse = alb * ( mix( uShadeCol, lit, sunTerm ) * skyK + uBounce * facing * clamp( 1.0 - dot( geometryNormal, upV ), 0.0, 1.0 ) * ( 1.0 - sunTerm ) )
    + uShadeLift * LIFT_K * ( 1.0 - sunTerm );
  reflectedLight.indirectDiffuse = vec3( 0.0 );                               // hemisphere/fill no longer used here
}
#endif
`,bS=`#include <common>
uniform vec3 uLitCol; uniform vec3 uShadeCol; uniform vec3 uShadeLift; uniform float uLambert; uniform float uSideK; uniform float uTerm; uniform vec3 uBounce; uniform float uSat;`;function Ed(t,e=1){return t.onBeforeCompile=n=>{Object.assign(n.uniforms,di),n.fragmentShader=n.fragmentShader.replace("#include <common>",bS+`
#define LIFT_K ${e.toFixed(3)}`).replace("#include <lights_fragment_begin>",`float sunVis = 1.0;
`+Oo).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
`+SS)},t.customProgramCacheKey=()=>"twoTone5_"+e.toFixed(3),t}var MS=t=>{let e=Math.min(t[0],t[1],t[2]),n=e<.08?e-6.25*e*e:.04,i=t.map(c=>c-n),s=Math.max(i[0],i[1],i[2]),r=.76;if(s<r)return i;let a=1-r,o=1-a*a/(s+a-r),l=1-1/(.15*(s-o)+1);return i.map(c=>c*o/s*(1-l)+o*l)},ra=(t,e=new Te)=>{let n=new Te(t),i=[n.r,n.g,n.b].map(r=>Math.min(r,.985)),s=i.slice();for(let r=0;r<60;r++){let a=MS(s);s=s.map((o,l)=>Math.max(0,o+(i[l]-a[l])))}return e.setRGB(s[0],s[1],s[2])};var pi=t=>{let e=(t*9301+49297)%233280||1;return()=>(e=e*16807%2147483647,(e-1)/2147483646)},Td=new Map,Ft=(t,e,n,i)=>{let s=Td.get(t);if(!s){let r=document.createElement("canvas");r.width=e,r.height=n,i(r.getContext("2d"),pi(t.length*131+t.charCodeAt(0))),s=new Qi(r),s.colorSpace=et,s.anisotropy=8,s.wrapS=s.wrapT=Gr,Td.set(t,s)}return s},Dd=(t,e,n)=>{let i=t.clone();return i.repeat.set(e,n),i.needsUpdate=!0,i},Pd=(t,e)=>e[Math.floor(t()*e.length)%e.length];var yr=new Te,$i={h:0,s:0,l:0},AS=(t,e,n=.1,i=5,s=.15)=>{yr.set(e).getHSL($i);let r=a=>1+(t()*2-1)*a;return yr.setHSL(($i.h+(t()*2-1)*i/360+1)%1,Math.min(1,$i.s*r(s)),Math.min(.97,$i.l*r(n))),"#"+yr.getHexString()};var _S=t=>{let e=AS(t,Pd(t,["#c0583a","#b44f35","#c8643f","#a94a33","#cf6e45","#b9603f"]),.24,6,.15),n=t();return n<.12?Cd(e,.68):n>.9?Cd(e,1.22):e},Cd=(t,e)=>(yr.set(t).getHSL($i),yr.setHSL($i.h,$i.s,Math.min(.92,$i.l*e)),"#"+yr.getHexString());var un=(t,e,n)=>e+(n-e)*t(),qu=Math.PI*2;var Rd=(t,e,n,i,s,r,a)=>{t.save(),t.translate(e,n),t.scale(s,1);let o=t.createRadialGradient(0,0,0,0,0,i);o.addColorStop(0,`rgba(${r},${a})`),o.addColorStop(1,`rgba(${r},0)`),t.fillStyle=o,t.fillRect(-i,-i,i*2,i*2),t.restore()};var wS=(t,e,n,i,s="#3a2212")=>{t.fillStyle=s,t.beginPath(),t.arc(e,n,i,0,qu),t.fill(),t.fillStyle="rgba(255,240,215,0.55)",t.beginPath(),t.arc(e-i*.32,n-i*.32,i*.36,0,qu),t.fill()};var Id=(t,e,n,i)=>{let s=Math.min(72,2048/Math.max(e,n)),r=Math.round(e*s),a=Math.round(n*s),o=l=>l*s;return Ft("facHD"+t,r,a,(l,c)=>{if(i.brick){l.fillStyle="#e9d3b4",l.fillRect(0,0,r,a);let g=o(.25),x=o(.085);for(let p=0,y=0;p<a;p+=x,y++)for(let S=-(y%2)*g/2;S<r;S+=g)l.fillStyle=_S(c),l.fillRect(S+1,p+1,g-2,x-2);let m=Math.round(e*n/12)+3;for(let p=0;p<m;p++)Rd(l,un(c,0,r),un(c,0,a),o(un(c,.4,1.4)),1.4,"70,40,30",un(c,.06,.12))}else{l.fillStyle=i.wall,l.fillRect(0,0,r,a);let g=Math.round(e*n/3)+6;for(let x=0;x<g;x++){let m=c()>.5;Rd(l,un(c,0,r),un(c,0,a),o(un(c,.4,1.5)),1.5,m?"255,255,255":"120,90,60",m?.07:.05)}for(let x=0;x<4;x++){let m=un(c,0,r),p=un(c,0,a*.8);l.strokeStyle="rgba(120,100,80,0.35)",l.lineWidth=1,l.beginPath(),l.moveTo(m,p);for(let y=0;y<4;y++)m+=o(un(c,-.08,.08)),p+=o(un(c,.04,.12)),l.lineTo(m,p);l.stroke()}}let h=Math.max(1,Math.floor(n/2.8)),u=Math.max(1,Math.floor(e/2.2));l.fillStyle="rgba(70,55,45,0.28)",l.fillRect(0,a-o(.45),r,o(.45)),l.fillStyle="rgba(70,55,45,0.35)",l.fillRect(0,a-o(.45),r,2);let f=(g,x,m,p)=>{l.fillStyle="#6e4a30",l.fillRect(g,x,m,p),l.strokeStyle="rgba(40,25,15,0.5)",l.lineWidth=2,l.strokeRect(g+1,x+1,m-2,p-2),l.fillStyle="rgba(255,230,200,0.22)",l.fillRect(g+2,x+2,m-4,2)};if(i.timber){let g=o(.18);f(0,0,g,a),f(r-g,0,g,a),f(0,0,r,g);for(let x=1;x<h;x++)f(0,a-o(x*2.8)-g/2,r,g);for(let x=1;x<u;x++)f(x*r/u-g/2,0,g,a-o(2.8))}let d=g=>{let x=o(1.1),m=o(2.1),p=y=>{l.beginPath(),l.moveTo(g-x/2-y,a),l.lineTo(g-x/2-y,a-m+x/2),l.arc(g,a-m+x/2,x/2+y,Math.PI,0),l.lineTo(g+x/2+y,a),l.closePath()};p(o(.1)),l.fillStyle="#e9e2d4",l.fill(),l.strokeStyle="rgba(60,45,40,0.6)",l.lineWidth=1.5,l.stroke(),p(0),l.fillStyle="#7a4a2c",l.fill(),l.save(),p(0),l.clip();for(let y=g-x/2+o(.14);y<g+x/2;y+=o(.14))l.fillStyle="rgba(40,20,10,0.45)",l.fillRect(y-1,a-m,2,m),l.fillStyle="rgba(255,225,190,0.15)",l.fillRect(y+1,a-m,2,m);l.restore(),p(0),l.strokeStyle="rgba(40,25,15,0.7)",l.lineWidth=2,l.stroke(),wS(l,g+x/3,a-m/2,o(.035),"#d9b04a")};for(let g=0;g<h;g++)for(let x=0;x<u;x++){let m=(x+.5)*r/u,p=a-o(g*2.8+.9);if(i.door&&g===0&&x===Math.floor(u/2)){d(m);continue}let y=o(.85),S=o(1.25),M=m-y/2,D=p-S,A=o(.08),v=o(.45);for(let w of[M-A-v-o(.02),M+y+A+o(.02)]){l.fillStyle=i.shutter,l.fillRect(w,D,v,S);let b=Math.max(1.5,o(.012));for(let R=D+o(.06);R<D+S-o(.04);R+=o(.06))l.fillStyle="rgba(0,0,0,0.22)",l.fillRect(w+o(.04),R,v-o(.08),b),l.fillStyle="rgba(255,255,255,0.14)",l.fillRect(w+o(.04),R+b,v-o(.08),1);l.strokeStyle="rgba(0,0,0,0.18)",l.lineWidth=o(.03),l.strokeRect(w+o(.015),D+o(.015),v-o(.03),S-o(.03)),l.strokeStyle="rgba(40,30,40,0.55)",l.lineWidth=1.5,l.strokeRect(w,D,v,S)}l.fillStyle="#f7f2e8",l.fillRect(M-A,D-A,y+2*A,S+2*A);let P=l.createLinearGradient(0,D,0,D+S);P.addColorStop(0,"#8d9cdb"),P.addColorStop(1,"#5761a8"),l.fillStyle=P,l.fillRect(M,D,y,S),c()<.35&&(l.fillStyle=Pd(c,["#f5c4c8","#f3e3c6","#d7e6cf"]),l.beginPath(),l.moveTo(M,D),l.lineTo(M+y*.42,D),l.lineTo(M,D+S*.75),l.fill(),l.beginPath(),l.moveTo(M+y,D),l.lineTo(M+y*.58,D),l.lineTo(M+y,D+S*.75),l.fill()),l.save(),l.beginPath(),l.rect(M,D,y,S),l.clip(),l.fillStyle="rgba(255,255,255,0.5)";for(let[w,b]of[[.3,o(.07)],[.58,o(.035)]])l.save(),l.translate(M+y*w,D+S*.5),l.rotate(Math.PI/4),l.fillRect(-b/2,-S,b,S*2),l.restore();l.restore(),l.fillStyle="#f7f2e8",l.fillRect(m-o(.02),D,o(.04),S),l.fillRect(M,D+S*.45-o(.02),y,o(.04)),l.strokeStyle="rgba(60,45,40,0.6)",l.lineWidth=1.5,l.strokeRect(M-A,D-A,y+2*A,S+2*A),l.strokeStyle="rgba(60,45,40,0.45)",l.strokeRect(M,D,y,S),l.fillStyle="#ebe3d4",l.fillRect(M-A-o(.06),p+A,y+2*A+o(.12),o(.07)),l.fillStyle="rgba(60,45,40,0.35)",l.fillRect(M-A-o(.06),p+A+o(.07),y+2*A+o(.12),o(.03))}})};var Ku={lit:"#fbf8f1",mid:"#e1e5f3",shade:"#c3cbe9"},ko={lit:"#ffd2a8",mid:"#f2a08f",shade:"#a98fc4"},aa=(t,e=Ku)=>Ft(`cloudHD_${e.lit}_${t}`,1024,512,n=>{let i=pi(t*7919+17),s=1024,r=512,a=400,o=6+Math.floor(i()*4),l=[];for(let u=0;u<o;u++){let f=(u+.5)/o,d=(60+110*Math.sin(Math.PI*f)**.8)*un(i,.75,1.15);l.push({x:150+f*724+un(i,-30,30),y:a-d*un(i,.35,.65),r:d})}for(let u=0;u<Math.floor(o/2);u++){let f=un(i,.25,.75),d=un(i,60,110);l.push({x:150+f*724,y:a-150-d*un(i,.3,.7),r:d})}let c=(u,f,d,g,x)=>{n.save(),n.filter=`blur(${x}px)`,n.fillStyle=g,n.beginPath();for(let m of l){let p=m.x+u*m.r,y=m.y+f*m.r;n.moveTo(p+m.r*d,y),n.arc(p,y,m.r*d,0,qu)}n.fill(),n.restore()};c(0,0,1,e.shade,6),c(-.04,-.12,.9,e.mid,8),c(-.1,-.26,.72,e.lit,10),n.globalCompositeOperation="destination-in";let h=n.createLinearGradient(0,a-18,0,a+6);h.addColorStop(0,"rgba(0,0,0,1)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(0,0,s,r),n.globalCompositeOperation="source-over"});var oa=(t,e,n)=>new B(t,e,n),Ud=new Map,F=(t,e,n={})=>{let i=e??(typeof t=="string"?"c"+t:t.uuid),s=Ud.get(i+JSON.stringify(Object.keys(n)));return s||(s=Ed(new xs(typeof t=="string"?{color:t,...n}:{map:t,...n})),Ud.set(i+JSON.stringify(Object.keys(n)),s)),s},Ye=(t,e=0)=>{if(typeof t=="string"){let n=ra(t);return e&&n.multiplyScalar(1+e),new Sn({color:n})}return new Sn({map:t,color:e?new Te(1+e,1+e,1+e):new Te(.93,.93,.93)})},j=(t,e,n,i,s,r,a,o,l=0,c=!0)=>{let h=new Le(new kn(e,n,i),s);return h.position.set(r,a+n/2,o),h.rotation.y=l,h.castShadow=c,h.receiveShadow=!0,t.add(h),h},Ot=(t,e,n,i,s,r,a,o,l=16,c=!0)=>{let h=new Le(new _n(n,e,i,l),s);return h.position.set(r,a+i/2,o),h.castShadow=c,h.receiveShadow=!0,t.add(h),h},xt=(t,e,n,i,s,r,a,o=0,l=0)=>{let c=new Le(new Dn(e,n),i);return c.position.set(s,r,a),c.rotation.set(o,l,0,"YXZ"),c.receiveShadow=!0,t.add(c),c},jt=(t,e,n,i,s=0,r=0,a=0)=>{let o=xt(t,e,n,i,s,a,r,-Math.PI/2);return o.castShadow=!1,o};var mt=(t,e=1,n=1)=>Dd(t.clone(),e,n),mi=(t,e,n)=>Ft("sign"+t,n.w??1024,n.h??256,i=>{let s=n.w??1024,r=n.h??256;i.fillStyle=n.bg,i.fillRect(0,0,s,r),n.border&&(i.strokeStyle=n.border,i.lineWidth=r*.06,i.strokeRect(r*.05,r*.05,s-r*.1,r-r*.1)),i.fillStyle=n.fg,i.textAlign="center",i.textBaseline="middle";let a=n.sub?r*.42:r*.56;i.font=`900 ${a}px ${n.font??"Arial Black, Arial, sans-serif"}`;let o=1,l=i.measureText(e).width;l>s*.9&&(o=s*.9/l),i.save(),i.translate(s/2,n.sub?r*.38:r*.53),i.scale(o,1),i.fillText(e,0,0),i.restore(),n.sub&&(i.fillStyle=n.subFg??n.fg,i.font=`700 ${r*.22}px Arial, sans-serif`,i.fillText(n.sub,s/2,r*.78))}),ES=["#e2453c","#f2b134","#3f9a55","#3b7bd4","#f07a2c","#8a5ac9","#e8e1d0","#2fb5a8","#d8406f","#ffd84a"],la=(t,e,n=1,i=ES)=>Ft("shelf"+t,1024,512,(s,r)=>{let a=pi(n);s.fillStyle="#4a4f5c",s.fillRect(0,0,1024,512);let o=4,l=512/o;for(let c=0;c<o;c++){let h=c*l,u=h+l-14;if(e!=="empty"){let f=6;for(;f<1010;){let d=e==="mixed"?["cans","boxes","bottles"][Math.floor(a()*3)]:e,g=i[Math.floor(a()*i.length)],x=2+Math.floor(a()*4);for(let m=0;m<x&&f<1010;m++)if(d==="cans")s.fillStyle=g,s.fillRect(f,u-70,44,70),s.fillStyle="#f3efe6",s.fillRect(f,u-70*.62,44,70*.3),s.fillStyle="#b9bec6",s.fillRect(f,u-70,44,6),s.strokeStyle="#1d1820",s.lineWidth=3,s.strokeRect(f,u-70,44,70),f+=47;else if(d==="boxes"){let y=92+Math.floor(a()*10);s.fillStyle=g,s.fillRect(f,u-y,52,y),s.fillStyle="#ffffffcc",s.beginPath(),s.arc(f+52/2,u-y*.55,52*.28,0,7),s.fill(),s.fillStyle="#ffffff",s.fillRect(f+6,u-y+10,40,10),s.strokeStyle="#1d1820",s.lineWidth=3,s.strokeRect(f,u-y,52,y),f+=54}else if(d==="bottles")s.fillStyle=g,s.beginPath(),s.moveTo(f+4,u),s.lineTo(f+4,u-96*.6),s.lineTo(f+12,u-96*.8),s.lineTo(f+12,u-96),s.lineTo(f+22,u-96),s.lineTo(f+22,u-96*.8),s.lineTo(f+30,u-96*.6),s.lineTo(f+30,u),s.closePath(),s.fill(),s.strokeStyle="#1d1820",s.lineWidth=3,s.stroke(),s.fillStyle="#fff8",s.fillRect(f+6,u-96*.45,22,18),f+=38;else{for(let S=0;S<2;S++)for(let M=0;M<2;M++){let D=f+S*40,A=u-(M+1)*42;s.fillStyle="#f4efe6",s.beginPath(),s.moveTo(D+2,A),s.lineTo(D+38-2,A),s.lineTo(D+38-6,A+40),s.lineTo(D+6,A+40),s.closePath(),s.fill(),s.fillStyle="#6b3a22",s.fillRect(D+1,A-4,36,9),s.fillStyle="#3f9a55",s.fillRect(D+6,A+14,26,12),s.strokeStyle="#1d1820",s.lineWidth=3,s.beginPath(),s.moveTo(D+2,A),s.lineTo(D+38-2,A),s.lineTo(D+38-6,A+40),s.lineTo(D+6,A+40),s.closePath(),s.stroke()}f+=86}f+=6+a()*8}}s.fillStyle="#e9eaee",s.fillRect(0,u,1024,14),s.fillStyle="#1d1820",s.fillRect(0,u-2,1024,3),s.fillRect(0,u+13,1024,3);for(let f=30;f<1024;f+=128)s.fillStyle=c%2?"#ffd84a":"#ffffff",s.fillRect(f,u+2,40,10)}}),Bd=(t,e,n,i=8,s="#00000022")=>Ft("chk"+t,512,512,r=>{let a=512/i;for(let o=0;o<i;o++)for(let l=0;l<i;l++)r.fillStyle=(o+l)%2?e:n,r.fillRect(o*a,l*a,a,a);r.strokeStyle=s,r.lineWidth=3;for(let o=0;o<=i;o++)r.beginPath(),r.moveTo(o*a,0),r.lineTo(o*a,512),r.stroke(),r.beginPath(),r.moveTo(0,o*a),r.lineTo(512,o*a),r.stroke()}),es=(t,e,n,i=1800,s=6)=>Ft("nz"+t,512,512,(r,a)=>{r.fillStyle=e,r.fillRect(0,0,512,512);for(let o=0;o<i;o++){r.fillStyle=n[o%n.length];let l=s*(.4+a());r.fillRect(a()*512,a()*512,l,l*(.5+a()))}}),Qu=(t,e,n=!1,i=8)=>Ft("st"+t,256,256,s=>{let r=256/i;for(let a=0;a<i;a++)s.fillStyle=e[a%e.length],n?s.fillRect(a*r,0,r,256):s.fillRect(0,a*r,256,r)}),Ld=(t,e,n="#3a2416")=>Ft("wd"+t,512,512,(i,s)=>{for(let o=0;o<8;o++){let l=new Te(e);l.offsetHSL(0,0,(s()-.5)*.06),i.fillStyle="#"+l.getHexString(),i.fillRect(0,o*64,512,64),i.fillStyle=n,i.fillRect(0,o*64,512,3);let c=s()*512;i.fillRect(c,o*64,3,64),i.globalAlpha=.18;for(let h=0;h<6;h++)i.fillRect(s()*512,o*64+6+s()*52,40+s()*80,2);i.globalAlpha=1}}),ts=(t,e,n=0)=>Ft("wl"+t,512,512,(i,s)=>{i.fillStyle=e,i.fillRect(0,0,512,512);let r=new Te(e);for(let a=0;a<900;a++){let o=r.clone().offsetHSL(0,0,(s()-.5)*.05);i.fillStyle="#"+o.getHexString(),i.fillRect(s()*512,s()*512,3+s()*5,3+s()*5)}if(n){i.fillStyle="#"+r.clone().multiplyScalar(.78).getHexString();for(let a=0;a<512;a+=512/n)i.fillRect(0,a,512,3)}}),Sr=()=>es("asph","#5d5f66",["#6a6c73","#53555c","#72747a"],5e3,4),Nd=()=>es("grass2","#7fae45",["#8fbd52","#6e9d3b","#9cc65e","#5f8f35"],6e3,7),Fd=()=>es("dry","#d9b45e",["#e6c36d","#c9a24f","#efcf7f","#bf9447"],6e3,7),Zu=(t,e,n)=>Ft("cp"+t,512,512,(i,s)=>{i.fillStyle=e,i.fillRect(0,0,512,512),i.fillStyle=n;for(let r=0;r<512;r+=64)for(let a=0;a<512;a+=64)i.beginPath(),i.arc(a+32,r+32,9,0,7),i.fill(),i.fillRect(a+6,r+30,52,4);for(let r=0;r<2500;r++)i.fillStyle=s()>.5?"#ffffff10":"#00000012",i.fillRect(s()*512,s()*512,3,3)});var Od="#1d1820",Vo=(t,e,n,i=1,s=1,r=!1)=>{let a=pi(s);Ot(t,.22*i,.16*i,2.2*i,F("#7a5236"),e,0,n,8);let o=r?["#6f8f3a","#7f9c44","#5f7f33"]:["#4f9a3e","#5aa846","#468a37"];for(let l=0;l<5;l++){let c=new Le(new Kr((1.1+a()*.5)*i,1),F(o[l%3]));c.position.set(e+(a()-.5)*1.6*i,(2.6+a()*1.2)*i,n+(a()-.5)*1.6*i),c.castShadow=!0,c.receiveShadow=!0,t.add(c)}},ns=(t,e,n,i=7,s=2)=>{let r=pi(s),a=e,o=n,l=(r()-.5)*.6;for(let c=0;c<8;c++)Ot(t,.2,.17,i/8+.02,F(c%2?"#9a7a55":"#8a6c4a"),a,c*i/8,o,8),a+=l*.12;for(let c=0;c<7;c++){let h=c/7*Math.PI*2+r(),u=new Le(new kn(2.6,.06,.55),F(c%2?"#3f8f3a":"#4fa046"));u.geometry.translate(1.3,0,0),u.position.set(a,i,o),u.rotation.set(0,h,-.35),u.castShadow=!0,t.add(u)}},TS=(t,e,n,i=6)=>{Ot(t,.08,.08,i,F("#3b4150"),e,0,n,8),j(t,1,.12,.25,F("#3b4150"),e+.4,i,n),j(t,.5,.06,.2,Ye("#fff6d8",.5),e+.6,i-.06,n,0,!1)},kd=(t,e="#6f8fb8",n=!0)=>{let i=new rt;t.add(i),j(i,4.6,.75,1.8,F(e),0,.35,0),n&&j(i,2.6,.32,1.82,F("#9a6a3c"),-.6,.6,0),j(i,3.2,.7,1.66,F(e),-.45,1.1,0);let s=Ye("#2c3e5a");j(i,3,.5,1.68,s,-.45,1.18,0,0,!1);for(let o of[-.9,.25])j(i,.08,.52,1.7,F(e),o,1.17,0);j(i,4.7,.14,1.84,F("#d8d8dc"),0,.3,0),j(i,.1,.18,.4,Ye("#fff3c4",.6),2.32,.65,.6,0,!1),j(i,.1,.18,.4,Ye("#fff3c4",.6),2.32,.65,-.6,0,!1),j(i,.1,.16,.35,Ye("#e0453c",.3),-2.32,.65,.6,0,!1),j(i,.1,.16,.35,Ye("#e0453c",.3),-2.32,.65,-.6,0,!1);let r=[];for(let o of[-1.45,1.45])for(let l of[-.88,.88]){let c=new Le(new _n(.38,.38,.3,16),F("#26222a"));c.rotation.x=Math.PI/2,c.position.set(o,.38,l),c.castShadow=!0,i.add(c),r.push(c);let h=new Le(new _n(.17,.17,.32,10),F("#c9ccd2"));h.rotation.x=Math.PI/2,h.position.copy(c.position),i.add(h)}j(i,2.4,.08,1.5,F("#3b4150"),-.5,1.46,0);let a=[];for(let o=0;o<6;o++)a.push(j(i,.7,.4,.62,Cs(),-1.3+o%3*.78,1.54+Math.floor(o/3)*.41,o%2*.05-.02+.33*(Math.floor(o/3),0)));return i.userData={wheels:r,cases:a},i},Ho=null,Cs=()=>{if(Ho)return Ho;let t=Ft("caseSide",256,160,s=>{s.fillStyle="#c99a5e",s.fillRect(0,0,256,160),s.fillStyle="#8f6a3c",s.fillRect(0,0,256,10),s.fillStyle="#6b3a22",s.font="900 34px Arial Black, Arial",s.textAlign="center",s.fillText("PUDDING",128,80),s.fillStyle="#3f9a55",s.fillRect(40,100,176,26),s.fillStyle="#fff",s.font="700 20px Arial",s.fillText("CHOCOLATE \xB7 144",128,120),s.strokeStyle=Od,s.lineWidth=6,s.strokeRect(3,3,250,154)}),e=Ft("caseTop",128,128,s=>{s.fillStyle="#d3a76a",s.fillRect(0,0,128,128),s.fillStyle="#b88a50",s.fillRect(60,0,8,128),s.strokeStyle=Od,s.lineWidth=5,s.strokeRect(2,2,124,124)}),n=F(t),i=F(e);return Ho=[n,n,i,i,n,n],Ho};var CS=()=>Ft("cupTops",256,256,t=>{t.fillStyle="#d9cdb8",t.fillRect(0,0,256,256);for(let e=0;e<8;e++)for(let n=0;n<8;n++){let i=n*32+16+e%2*8,s=e*32+16;t.fillStyle=(n+e)%3?"#7a4a32":"#5f8f55",t.beginPath(),t.arc(i,s,11,0,7),t.fill(),t.strokeStyle="#f7f2e8",t.lineWidth=4,t.stroke()}}),RS=null,DS=()=>RS??=[F(Ft("cupSide",128,64,t=>{t.fillStyle="#f4efe6",t.fillRect(0,0,128,64),t.fillStyle="#3f9a55",t.fillRect(0,22,128,20),t.fillStyle="#1d1820",t.fillRect(0,0,128,4)})),F("#6b3a22"),F("#f4efe6")],Wo=(t,e,n,i,s,r,a=3)=>{let o=new _n(.075,.058,.11,12);o.translate(0,.055,0);let l=new lo(o,DS(),r),c=pi(a),h=new wt,u=new si,f=new Fn;for(let d=0;d<r;d++){let g=c()*Math.PI*2,x=Math.sqrt(c())*i,m=s*Math.max(0,1-(x/i)**2);f.set((c()-.5)*.9,c()*6.28,(c()-.5)*.9),u.setFromEuler(f),h.compose(oa(e+Math.cos(g)*x,Math.max(0,m*(.86+.14*c())-.05),n+Math.sin(g)*x),u,oa(1,1,1)),l.setMatrixAt(d,h)}return l.castShadow=!0,l.receiveShadow=!0,t.add(l),l},PS=(t,e,n,i,s)=>{let r=new Qn(1,32,12,0,Math.PI*2,0,Math.PI/2);r.scale(i,s*.9,i);let a=new Le(r,F(mt(CS(),10,4)));return a.position.set(e,0,n),a.receiveShadow=!0,a.castShadow=!0,t.add(a),a},IS=t=>t,Hd=(t,e,n,i,s,r,a,o=2.1)=>{let l=new rt;l.position.set(e,0,n+i/2),t.add(l),j(l,.9,o,i,F("#dfe2e8"),0,0,0),j(l,.94,.14,i+.04,F("#c94f45"),0,o,0),j(l,.96,.18,i+.04,F("#3b4150"),0,0,0);let c=mt(la(r+a,r,a),i/3.2,1),h=xt(l,i,o-.32,F(c),s*.465,.18+(o-.32)/2,0,0,s*Math.PI/2);return h.castShadow=!1,{g:l,face:h,t:c}},US=()=>{let t=new rt,e={};jt(t,30,46,F(mt(Bd("storeTile","#f1eee6","#cfe3dc",8),7,11)),0,0);let n=F(mt(ts("storeWall","#f3e2c4"),4,1));j(t,30,5,.3,n,0,0,-16),j(t,.3,5,40,n,-14.5,0,2),j(t,.3,5,40,n,14.5,0,2),j(t,30,1,.32,F("#3f9a55"),0,4,-15.98,0,!1);let i=xt(t,9,1.1,Ye(mi("dairy","DAIRY \xB7 FROZEN \xB7 DESSERTS",{bg:"#3f9a55",fg:"#ffffff",w:2048,h:256})),0,3.25,-15.8);i.castShadow=!1;for(let u=0;u<6;u++)j(t,2.3,2.3,.8,F("#dfe2e8"),-6.5+u*2.6,0,-15.3),xt(t,2,1.9,Ye("#bfe6f2",.15),-6.5+u*2.6,1.2,-14.88);let s=xt(t,30,46,F("#e8e6e0"),0,5,0,Math.PI/2);s.castShadow=!1;for(let u=-12;u<=12;u+=4.4)for(let f=-14;f<=12;f+=3.2){let d=xt(t,.5,2.2,Ye("#fffbea",1.2),u,4.97,f,Math.PI/2);d.castShadow=!1}let r=[-8.8,-4.4,0,4.4,8.8],a=[["bottles","mixed"],["cans","boxes"],["boxes","mixed"],["cups","mixed"],["bottles","cans"]];for(let u=-1;u<r.length;u++){let f=u<0?r[0]-2.2:r[u]+2.2,d=a[Math.min(a.length-1,u+1)]?.[0]??"mixed",g=a[Math.max(0,u)]?.[1]??"mixed",x=Hd(t,f-.47,-12,11,-1,u>=0?a[u][1]:"mixed",10+u),m=Hd(t,f+.47,-12,11,1,u+1<a.length?a[u+1][0]:"mixed",20+u);u+1===3&&(e.puddingShelf=m),u===1&&(e.soupShelf=x)}let o=["DRINKS","SOUP \xB7 CEREAL","SNACKS","DESSERTS","BAKING"];r.forEach((u,f)=>{let d=mi("aisle"+f,o[f],{bg:"#2f6fb5",fg:"#ffffff",w:1024,h:320,sub:"AISLE "+(f+1),subFg:"#ffd84a"}),g=j(t,2.4,.75,.06,[F("#2f6fb5"),F("#2f6fb5"),F("#2f6fb5"),F("#2f6fb5"),Ye(d),Ye(d)],u,3.6,-1.2,0,!1);g.rotation.y=0,Ot(t,.015,.015,.7,F("#666"),u-.9,4.3,-1.2,4,!1),Ot(t,.015,.015,.7,F("#666"),u+.9,4.3,-1.2,4,!1)});let l=Ft("promoPoster",512,768,u=>{u.fillStyle="#fff6da",u.fillRect(0,0,512,768),u.fillStyle="#3f9a55",u.fillRect(0,0,512,150),u.fillStyle="#fff",u.font="900 64px Arial Black, Arial",u.textAlign="center",u.fillText("FLY FREE!",256,100),u.fillStyle="#1d1820",u.font="900 54px Arial Black, Arial",u.fillText("10 BARCODES",256,240),u.font="700 44px Arial",u.fillText("=",256,300),u.fillStyle="#e2453c",u.font="900 80px Arial Black, Arial",u.fillText("500",256,390),u.fillStyle="#1d1820",u.font="900 46px Arial Black, Arial",u.fillText("AIRLINE MILES",256,450),u.save(),u.translate(256,545),u.fillStyle="#2f6fb5",u.beginPath(),u.ellipse(0,0,120,22,0,0,7),u.fill(),u.beginPath(),u.moveTo(-20,0),u.lineTo(30,-80),u.lineTo(60,-80),u.lineTo(40,0),u.closePath(),u.fill(),u.beginPath(),u.moveTo(-20,0),u.lineTo(30,80),u.lineTo(60,80),u.lineTo(40,0),u.closePath(),u.fill(),u.beginPath(),u.moveTo(-110,-5),u.lineTo(-130,-55),u.lineTo(-100,-55),u.lineTo(-85,-5),u.fill(),u.restore(),u.fillStyle="#ffd84a",u.beginPath(),u.arc(400,690,62,0,7),u.fill(),u.strokeStyle="#1d1820",u.lineWidth=6,u.stroke(),u.fillStyle="#1d1820",u.font="900 30px Arial Black, Arial",u.fillText("EARLY?",400,682),u.fillText("x2",400,716),u.font="400 15px Arial",u.textAlign="left",u.fillStyle="#555";for(let f=0;f<5;f++)u.fillText("*mail-in offer. see details. limit none.",24,650+f*22);u.strokeStyle="#1d1820",u.lineWidth=12,u.strokeRect(6,6,500,756)}),c=new rt;c.position.set(-2.2,0,.6),t.add(c),j(c,1.8,1.3,1.1,[F("#e2453c"),F("#e2453c"),F("#e2453c"),F("#e2453c"),F(mt(la("ecap","cups",77),.5,.65)),F("#e2453c")],0,0,0),j(c,.08,1.3,.08,F("#3b4150"),0,1.3,0);let h=xt(c,.95,1.42,Ye(l),0,2.3,.06);h.castShadow=!1,j(c,1.02,1.5,.05,F("#3b4150"),0,1.55,0),e.promo=c;for(let u=0;u<3;u++){let f=-6+u*5;j(t,.9,.95,3.4,F("#3b4150"),f,0,6.5),j(t,.7,.06,2.6,F("#26222a"),f,.95,6.3),j(t,.5,.35,.45,F("#d9dde3"),f,.95,7.6),j(t,.3,.25,.04,Ye("#7fe0a0",.4),f,1.3,7.6,0,!1),Ot(t,.04,.04,2.3,F("#9aa0aa"),f+.4,0,8.1,6),xt(t,.5,.5,Ye(mi("lane"+u,String(u+1),{bg:"#e2453c",fg:"#fff",w:256,h:256})),f+.4,2.5,8.1)}e.laneX=-1,j(t,30,.6,.3,F("#3f9a55"),0,4.4,12);for(let u=-13;u<=13;u+=2.6)xt(t,2.4,3.6,Ye("#cfe8f6",.08),u,2.2,11.9,0,Math.PI),j(t,.16,4.4,.3,F("#3b4150"),u+1.3,0,12);j(t,30,.6,.3,F("#3b4150"),0,0,12);for(let u=0;u<3;u++)Ju(t,9+u*.35,9.5,Math.PI/2);e.cart=Ju(t,0,0,0),e.cartPile=new rt,e.cart.add(e.cartPile);for(let u=0;u<18;u++){let f=j(e.cartPile,.62,.36,.5,Cs(),(u%2-.5)*.04,1.02+u*.37,0);f.rotation.y=u*.37%.3-.15}return IS(t),{root:t,refs:e}},Ju=(t,e,n,i)=>{let s=new rt;s.position.set(e,0,n),s.rotation.y=i,t.add(s);let r=F("#b8bec8");j(s,.62,.55,.95,[r,r,F("#9aa0aa"),r,r,r],0,.5,0),j(s,.66,.05,1,F("#e2453c"),0,1.05,0),j(s,.66,.06,.06,F("#e2453c"),0,1.12,-.6);for(let a of[-.25,.25])for(let o of[-.38,.38])Ot(s,.06,.06,.12,F("#26222a"),a,0,o,8);return j(s,.06,.45,.06,F("#9aa0aa"),-.28,.08,.38),j(s,.06,.45,.06,F("#9aa0aa"),.28,.08,.38),s},BS=()=>{let t=new rt,e={};jt(t,220,220,F(mt(Nd(),40,40)),0,0,-.02),jt(t,200,8,F(mt(Sr(),40,2)),0,0,0);for(let l of[-4.6,4.6])jt(t,200,1.2,F("#4fa070"),0,l*.83,.005);for(let l=-100;l<100;l+=4)jt(t,2,.15,Ye("#fff6d0"),l,0,.01);for(let l of[-1,1])j(t,200,.15,3.4,F(mt(es("walk","#d8d2c6",["#cfc8ba","#e2ddd2"],2e3,5),50,1)),0,0,l*5.7),j(t,200,.16,.25,F("#bdb6a8"),0,0,l*4.05);let n=[{wall:"#e9c79a",shutter:"#3f6fb5"},{wall:"#d98a6a",shutter:"#f1eee6"},{wall:"#f1e3c6",shutter:"#3f9a55"},{wall:"#b5d0c6",shutter:"#c94f45"},{wall:"#f2c45a",shutter:"#3b4150"},{wall:"#c9b7e0",shutter:"#f1eee6"}],i=["#e2453c","#3f9a55","#2f6fb5","#f07a2c"];for(let l of[-1,1])for(let c=0;c<12;c++){let h=-44+c*8,u=7.6,f=5+(c*7+(l>0?3:0))%3*1.6,d=8,g=l*(7.4+d/2),x=n[(c+(l>0?2:0))%n.length],m=Id("davis"+l+c,u,f,{...x,door:!0,brick:(c+(l>0?1:0))%4===0}),p=F(x.wall);j(t,u,f,d,[p,p,F("#a7a29a"),p,l<0?F(m):p,l>0?F(m):p],h,0,g),j(t,u+.2,.35,d+.2,F("#f6efe2"),h,f,g);let y=j(t,u*.8,.12,1.4,F(i[c%4]),h,2.9,l*7.4-l*-.5-l*1.2);y.rotation.x=l*.25}for(let l=0;l<18;l++){let c=-48+l*6;l%2?ns(t,c,-4.9,7+l%3,l):Math.abs(c)>10&&Vo(t,c,4.9,1,l)}let s=(l,c,h)=>{let u=new rt;u.position.set(l,0,c),t.add(u);for(let f of[-.5,.5]){let d=new Le(new ho(.33,.035,6,20),F("#26222a"));d.position.set(f,.35,0),d.castShadow=!0,u.add(d)}return j(u,1,.05,.05,F(h),0,.55,0),j(u,.05,.4,.05,F(h),-.15,.35,0),j(u,.3,.06,.15,F("#26222a"),-.15,.78,0),j(u,.05,.55,.05,F(h),.45,.35,0),j(u,.05,.05,.5,F("#26222a"),.45,.9,0),u};["#e2453c","#2f6fb5","#3f9a55","#f2b134","#8a5ac9"].forEach((l,c)=>s(-14+c*1.5,-6.6,l)),e.bike=s(0,2.2,"#2f6fb5");let r=new rt;r.position.set(30,0,-60),t.add(r);for(let[l,c]of[[-3,-3],[3,-3],[-3,3],[3,3]])Ot(r,.3,.3,22,F("#c9ccd2"),l,0,c,8);Ot(r,6,6,7,F("#e9eef2"),0,22,0,24);let a=new Le(new or(6.2,3,24),F("#c9ccd2"));a.position.set(0,30.5,0),a.castShadow=!0,r.add(a);let o=xt(r,9,2.6,Ye(mi("davisTower","DAVIS",{bg:"#e9eef2",fg:"#2f6fb5",w:1024,h:300})),0,25.5,6.05);o.castShadow=!1;for(let l=0;l<6;l++){let c=xt(t,40,20,new Sn({map:aa(l,Ku),transparent:!0,depthWrite:!1,fog:!1}),-120+l*50,55+l%3*8,-170);c.layers.set(rn),c.castShadow=!1}return{root:t,refs:e}},LS=()=>{let t=new rt,e={},n=new Dn(900,900,120,120);n.rotateX(-Math.PI/2);let i=n.attributes.position;for(let l=0;l<i.count;l++){let c=i.getX(l),h=i.getZ(l),u=Math.max(0,Math.abs(h-2)-30),f=u*.22*(.55+.45*Math.sin(c*.012+1.3)*Math.cos(h*.01))+Math.max(0,u-60)*.18*(.6+.4*Math.sin(c*.02));i.setY(l,Math.min(f,70)-.05)}n.computeVertexNormals();let s=new Le(n,F(mt(Fd(),120,120)));s.receiveShadow=!0,t.add(s);let r=pi(5);for(let l=0;l<70;l++){let c=(r()-.5)*500,h=r()>.5?1:-1,u=h*(36+r()*120),f=Math.max(0,Math.abs(u-2)-30),d=Math.min(f*.22*(.55+.45*Math.sin(c*.012+1.3)*Math.cos(u*.01))+Math.max(0,f-60)*.18*(.6+.4*Math.sin(c*.02)),70)-.3,g=new rt;g.position.set(c,d,u),t.add(g),Vo(g,0,0,1.3+r()*.8,l,!0)}jt(t,900,9,F(mt(Sr(),180,2)),0,14,.01);for(let l=-440;l<440;l+=6)jt(t,3,.18,Ye("#ffd84a"),l,14,.02);for(let l of[9.7,18.3])jt(t,900,.16,Ye("#f6f2e6"),0,l,.02);for(let l=-440;l<440;l+=22)Ot(t,.12,.1,8,F("#7a5236"),l,0,7.6,6),j(t,1.8,.12,.12,F("#7a5236"),l,7.4,7.6);jt(t,120,26,F(mt(Sr(),24,6)),0,-7,.008);for(let l=-56;l<56;l+=3)jt(t,.12,4.5,Ye("#f6f2e6"),l,-2,.02);let a=[{x:-38,name:"SUNNY MART",band:"#e2453c",wall:"#f3e2c4"},{x:0,name:"VALLEY FOODS",band:"#3f9a55",wall:"#e9d9b8"},{x:38,name:"BIG OAK MARKET",band:"#2f6fb5",wall:"#f1eee6"}];e.stores=a,a.forEach((l,c)=>{let g=F(mt(ts("strip"+c,l.wall,0),6,2));j(t,30,7.5,16,g,l.x,0,-20-16/2+.01),j(t,30+.4,1.6,.6,F(l.band),l.x,7.5-1.6,-20+.2);let x=xt(t,16,1.3,Ye(mi("store"+c,l.name,{bg:l.band,fg:"#ffffff",w:2048,h:180})),l.x,7.5-.8,-20+.52);x.castShadow=!1,j(t,26,.5,3,F("#f6efe2"),l.x,3.6,-20+1.5);for(let m=0;m<4;m++)Ot(t,.14,.14,3.6,F("#f6efe2"),l.x-11+m*7.3,0,-20+2.8,8);for(let m=0;m<8;m++){let p=l.x-12+m*3.4;xt(t,3,3,Ye(m===3||m===4?"#3a4a66":"#9fc6e0",.05),p,1.6,-20+.03)}for(let m=0;m<4;m++)Ju(t,l.x+9+m*.32,-15,Math.PI/2);ns(t,l.x-16,-14,8,c*3+1),ns(t,l.x+16,-14,7.5,c*3+2);for(let m=0;m<3;m++)TS(t,l.x-10+m*10,-2,6.5)});let o=["#c94f45","#e9e6dd","#3b4150","#f2b134","#5a8fc2"];for(let l=0;l<9;l++){let c=kd(t,o[l%5],!1);c.position.set(-50+l*12.5+l%2*1.5,0,-4.3+(l%3===0?4.6:0)),c.rotation.y=Math.PI/2,c.userData.cases.forEach(h=>h.visible=!1)}e.car=kd(t,"#6f8fb8",!0);for(let l=0;l<8;l++){let c=xt(t,70,30,new Sn({map:aa(l+3,ko),transparent:!0,depthWrite:!1,fog:!1}),-300+l*90,70+l%3*12,-320);c.layers.set(rn),c.castShadow=!1,e["cloud"+l]=c}return{root:t,refs:e}},NS=()=>{let t=new rt,e={};jt(t,80,60,F(mt(Sr(),16,12)),0,10);let n=F(mt(ts("dockWall","#d9cbb0",10),6,1.5));j(t,40,8,10,n,0,0,-6),j(t,40,1.2,4,F(mt(es("conc","#bdb6a8",["#b0a99b","#c9c2b4"],3e3,5),10,1)),0,0,1);let i=F(mt(Qu("rollup",["#c9ccd2","#aab0ba"],!1,16),1,1));for(let a=0;a<3;a++){let o=-8+a*8;j(t,4.2,4.2,.2,i,o,1.2,-.9),j(t,4.6,.3,.4,F("#f2b134"),o,5.4,-.9),j(t,.25,1.2,.5,F("#26222a"),o-2.3,0,3),j(t,.25,1.2,.5,F("#26222a"),o+2.3,0,3)}xt(t,6,.9,Ye(mi("receiving","RECEIVING",{bg:"#3b4150",fg:"#ffd84a",w:1024,h:160})),0,6.6,-.85);let s=new rt;s.position.set(-8,0,9),t.add(s),e.truck=s,j(s,2.6,3.2,9,F(mt(ts("trailer","#f1eee6",0),3,1)),0,1.1,0),j(s,2.64,.6,9.04,F("#e2453c"),0,1.1,0),xt(s,7,1.6,F(mi("truckSide","FRESH FOODS",{bg:"#f1eee6",fg:"#e2453c",w:1024,h:240})),1.33,3,0,0,Math.PI/2),j(s,2.5,2.6,2.6,F("#2f6fb5"),0,.9,6),j(s,2.4,1,.1,Ye("#2c3e5a"),0,2.4,7.32,0,!1);for(let a of[-3,-1.8,6.4])for(let o of[-1.2,1.2]){let l=new Le(new _n(.5,.5,.4,16),F("#26222a"));l.rotation.z=Math.PI/2,l.position.set(o,.5,a),l.castShadow=!0,s.add(l)}let r=[];for(let a=0;a<4;a++){let o=-5.5+a*3.3+(a>1?4.5:0),l=1.6;j(t,1.4,.15,1.2,F("#b88a50"),o,1.2,l);for(let c=0;c<15;c++){let h=c%2*.66-.33,u=Math.floor(c/2)%4,f=Math.floor(c/8)%2*.55-.27;r.push(j(t,.62,.38,.52,Cs(),o+h,1.35+u*.39,l+f))}}return e.cases=r,j(t,2,1,1.4,F("#3f9a55"),15,0,3),j(t,2,1,1.4,F("#3b4150"),17.5,0,3),Vo(t,-22,6,1.2,4),Vo(t,22,10,1.4,9),ns(t,-16,14,7,4),{root:t,refs:e}},FS=()=>{let t=new rt,e={};jt(t,12,10,F(mt(Ld("homeFloor","#c99a68"),3,2.5)),0,0);let n=F(mt(Ft("wallpaper",256,256,a=>{a.fillStyle="#f2e2b8",a.fillRect(0,0,256,256),a.fillStyle="#e7cf98";for(let o=0;o<256;o+=32)a.fillRect(o,0,12,256);a.fillStyle="#d98a6a";for(let o=16;o<256;o+=64)for(let l=6;l<256;l+=32)a.beginPath(),a.arc(l,o,4,0,7),a.fill()}),6,2));j(t,12,3.2,.2,n,0,0,-5),j(t,.2,3.2,10,n,-6,0,0),j(t,.2,3.2,10,n,6,0,0),j(t,12,.14,.24,F("#f6efe2"),0,0,-4.9),xt(t,2.6,1.6,Ye("#cfe8f6",.5),2.6,1.8,-4.88),j(t,2.8,.1,.2,F("#f6efe2"),2.6,.95,-4.85),j(t,.08,1.6,.08,F("#f6efe2"),2.6,1,-4.85);for(let a of[-1,1])j(t,.5,2.2,.08,F("#c94f45"),2.6+a*1.55,.6,-4.8);xt(t,1.2,.9,F(Ft("frame",256,192,a=>{a.fillStyle="#3f6fb5",a.fillRect(0,0,256,192),a.fillStyle="#f2e2b8",a.beginPath(),a.arc(80,70,30,0,7),a.fill(),a.fillStyle="#3f9a55",a.beginPath(),a.moveTo(0,192),a.lineTo(90,100),a.lineTo(170,150),a.lineTo(256,80),a.lineTo(256,192),a.fill(),a.strokeStyle="#6b3a22",a.lineWidth=16,a.strokeRect(0,0,256,192)})),-2.5,2,-4.88);let i=new rt;i.position.set(-2.8,0,-3.6),t.add(i),j(i,2.6,.45,.95,F("#5a8fc2"),0,0,0),j(i,2.6,.6,.25,F("#4a7fb2"),0,.45,-.36);for(let a of[-1,1])j(i,.25,.65,.95,F("#4a7fb2"),a*1.3,0,0);j(t,1.4,.55,.45,F("#7a5236"),4.2,0,-4.5),j(t,1.2,.72,.1,F("#26222a"),4.2,.6,-4.5),xt(t,1.05,.6,Ye("#7fd0e8",.1),4.2,.96,-4.44),Ot(t,.15,.15,.05,F("#3b4150"),-4.6,0,-4.2,10),Ot(t,.025,.025,1.5,F("#3b4150"),-4.6,0,-4.2,6),Ot(t,.25,.18,.35,F("#f2c45a"),-4.6,1.5,-4.2,12),jt(t,4.5,3,F(mt(Zu("rug","#c94f45","#f2c45a"),1.5,1)),-1,-1.5,.01);let s=[];for(let a=0;a<44;a++){let o=a%11,l=Math.floor(a/11);s.push(j(t,.62,.36,.5,Cs(),-5.4+l*.66+(l>1?8.8:0)*0,0,0)),s[a].position.set(-5.5+l*.66,.18+o*.37,1.2+a%2*.02)}for(let a=0;a<40;a++){let o=a%8,l=Math.floor(a/8),c=j(t,.62,.36,.5,Cs(),0,0,0);c.position.set(5.4-l%2*.66,.18+o*.37,-1.5+Math.floor(l/2)*.56),s.push(c)}e.stacks=s,e.mound=PS(t,.6,-.3,2.6,1.6),e.pile=Wo(t,.6,-.3,2.75,1.62,5200,11);let r=new rt;r.position.set(-3.6,0,2.6),t.add(r),e.table=r,j(r,1.8,.08,1.1,F("#d9b48a"),0,.74,0);for(let[a,o]of[[-.8,-.45],[.8,-.45],[-.8,.45],[.8,.45]])j(r,.07,.74,.07,F("#9a6a3c"),a,0,o);e.tablePile=Wo(r,.55,-.1,.32,.22,70,4),e.tablePile.position.y=.82;for(let a=0;a<30;a++){let o=j(r,.06,.004,.035,F("#ffffff"),-.5+Math.sin(a*7.1)*.25,.82+a%5*.004,Math.cos(a*3.3)*.25,a,!1)}return{root:t,refs:e}},OS=()=>{let t=new rt,e={};jt(t,40,30,F(mt(es("fbFloor","#bfb8aa",["#b3ac9e","#ccc5b7","#a9a294"],4e3,5),8,6)),0,0);let n=F(mt(Qu("corr",["#d8dee6","#c3cad4"],!0,16),8,1));j(t,40,8,.3,n,0,0,-10),j(t,.3,8,30,n,-16,0,2),j(t,.3,8,30,n,16,0,2),xt(t,6,5,Ye("#fff3d6",.9),10,2.5,-9.8);let i=xt(t,12,1.8,Ye(mi("fbBanner","COMMUNITY FOOD BANK",{bg:"#f07a2c",fg:"#ffffff",w:2048,h:300,sub:"THANK YOU, VOLUNTEERS!",subFg:"#fff6da"})),-3,5.6,-9.8);i.castShadow=!1;for(let r=0;r<3;r++){let a=-12+r*5.2;for(let o of[-9.3,-8.3])for(let l of[-2.3,2.3])j(t,.12,5,.12,F("#3f6fb5"),a+l,0,o);for(let o=0;o<3;o++){j(t,4.8,.1,1.1,F("#f07a2c"),a,.2+o*1.7,-8.8);for(let l=0;l<6;l++)j(t,.7,.55+l%2*.15,.8,l%3?Cs():F("#d9b48a"),a-2+l*.8,.3+o*1.7,-8.8)}}let s=[];for(let r=0;r<2;r++){let a=new rt;a.position.set(-2+r*7.5,0,-1+r*.2),t.add(a),s.push(a),j(a,4.4,.06,1,F("#f1eee6"),0,.74,0);for(let[c,h]of[[-2,-.4],[2,-.4],[-2,.4],[2,.4]])j(a,.05,.74,.05,F("#9aa0aa"),c,0,h);let o=Wo(a,-1.2,0,.5,.45,140,20+r);o.position.y=.8;let l=Wo(a,1.3,0,.45,.35,110,30+r);l.position.y=.8,j(a,.5,.35,.4,F("#3f9a55"),.1,.8,.15);for(let c=0;c<14;c++)j(a,.06,.005,.035,F("#ffffff"),.1+Math.sin(c*5.3)*.18,1.16,.15+Math.cos(c*2.1)*.12,0,!1)}e.tables=s;for(let r=0;r<12;r++)j(t,.62,.38,.52,Cs(),8+r%2*.66,.15+Math.floor(r/4)*.39,-4+Math.floor(r/2)%2*.55);j(t,1.4,.15,1.2,F("#b88a50"),8.33,0,-3.73);for(let r=-10;r<=10;r+=5){Ot(t,.01,.01,1.5,F("#333"),r,6.5,0,4,!1);let a=new Le(new or(.5,.4,16,1,!0),F("#3b4150"));a.position.set(r,6.5,0),t.add(a),xt(t,.7,.7,Ye("#fff6d8",1.4),r,6.31,0,Math.PI/2)}return{root:t,refs:e}},zo=(t,e,n)=>{let i=Zi.degToRad(t),s=Zi.degToRad(e);return oa(n*Math.cos(i)*Math.sin(s),n*Math.sin(i),n*Math.cos(i)*Math.cos(s))},Go=[38.5,-121.7],kS=[[48.9,2.3],[51.5,-.1],[41.9,12.5],[52.5,13.4],[40.4,-3.7],[55.7,12.6],[21.3,-157.8],[-33.9,151.2],[35.7,139.7],[40.7,-74],[64.1,-21.9],[38.7,-9.1],[59.3,18.1]],HS=()=>{let t=new rt,e={},n=Ft("earth",2048,1024,(u,f)=>{u.fillStyle="#2f7fc6",u.fillRect(0,0,2048,1024);for(let m=0;m<2200;m++)u.fillStyle=f()>.5?"#3a8bd2":"#2a74ba",u.fillRect(f()*2048,f()*1024,10,3);let d=m=>(m+180)/360*2048,g=m=>(90-m)/180*1024,x=(m,p="#8cc063")=>{u.fillStyle=p,u.strokeStyle="#1d1820",u.lineWidth=6,u.beginPath(),m.forEach(([y,S],M)=>M?u.lineTo(d(S),g(y)):u.moveTo(d(S),g(y))),u.closePath(),u.fill(),u.stroke()};x([[70,-160],[72,-120],[70,-80],[60,-64],[47,-53],[44,-66],[30,-81],[25,-80],[29,-95],[18,-96],[15,-88],[8,-78],[18,-103],[32,-117],[40,-124],[48,-125],[60,-147],[58,-158]]),x([[82,-40],[76,-18],[70,-22],[60,-44],[66,-54],[78,-70]],"#e9f0f2"),x([[12,-72],[5,-52],[-7,-35],[-23,-41],[-40,-62],[-55,-68],[-42,-74],[-18,-71],[-5,-81]],"#9cc46b"),x([[71,25],[70,60],[76,100],[72,140],[66,178],[60,162],[52,141],[40,140],[35,127],[22,114],[10,106],[1,104],[8,98],[22,91],[10,78],[24,67],[25,57],[12,44],[30,33],[36,28],[41,29],[44,12],[38,15],[44,8],[36,-6],[43,-9],[48,-4],[51,2],[58,8],[63,5],[70,20]],"#a6c86e"),x([[37,10],[32,32],[11,51],[-12,41],[-35,20],[-17,12],[5,9],[5,-8],[15,-17],[27,-13],[36,-6]],"#d9c27a"),x([[-11,132],[-12,142],[-25,153],[-38,147],[-35,117],[-22,114]],"#d9b06a"),x([[58,-6],[58,-2],[51,1],[50,-5],[55,-6]],"#a6c86e"),x([[-70,-180],[-66,-60],[-66,60],[-68,180],[-90,180],[-90,-180]],"#f1f4f6")}),i=new Le(new Qn(3,96,64),F(n));i.castShadow=!0,i.receiveShadow=!0;let s=new rt;s.add(i),t.add(s),e.globe=s;let r=new ln,a=[],o=pi(9);for(let u=0;u<1500;u++){let f=oa(o()-.5,o()-.5,o()-.5).normalize().multiplyScalar(80+o()*40);a.push(f.x,f.y,f.z)}r.setAttribute("position",new Rt(a,3));let l=new co(r,new qr({color:new Te(2.2,2.2,2.4),size:.35,sizeAttenuation:!0,fog:!1}));l.layers.set(rn),t.add(l);let c=[];kS.forEach((u,f)=>{let d=zo(Go[0],Go[1],3),g=zo(u[0],u[1],3),x=d.clone().add(g).normalize().multiplyScalar(3+.35+d.distanceTo(g)*.22),m=new ar(d,x,g),p=new fo(m,64,.028,6,!1),y=new Le(p,Ye(f%2?"#ffd84a":"#ffffff",.6));y.layers.set(rn),s.add(y),c.push(y),y.userData={curve:m,count:p.index.count}}),e.arcs=c;let h=new Le(new Qn(.08,12,8),Ye("#e2453c",1));return h.position.copy(zo(Go[0],Go[1],3.02)),s.add(h),e.ll=zo,{root:t,refs:e}},zS=()=>{let t=new rt,e={};jt(t,120,60,F(mt(Sr(),24,12)),0,14);let n=F(mt(Ft("starWalk",512,512,h=>{h.fillStyle="#2b2730",h.fillRect(0,0,512,512),h.strokeStyle="#7a6f78",h.lineWidth=6,h.strokeRect(0,0,512,512),h.fillStyle="#c9606e",h.beginPath();for(let u=0;u<10;u++){let f=u/10*Math.PI*2-Math.PI/2,d=u%2?80:190;h.lineTo(256+Math.cos(f)*d,256+Math.sin(f)*d)}h.closePath(),h.fill(),h.strokeStyle="#e8c45a",h.lineWidth=10,h.stroke()}),20,3));j(t,60,.15,6,n,0,0,3);let i=F(mt(ts("theater","#c9606e",0),4,2));j(t,18,12,10,i,0,0,-5);for(let h=-3;h<=3;h++)j(t,.5,12,.4,F("#e8c45a"),h*2.6,0,.1);let s=new rt;s.position.set(0,4.6,1.6),t.add(s),j(s,14,2.6,3.2,F("#26222a"),0,0,0);let r=Ft("marquee",2048,380,h=>{h.fillStyle="#fff6da",h.fillRect(0,0,2048,380),h.fillStyle="#1d1820",h.textAlign="center",h.font="900 70px Arial Black, Arial",h.fillText("NOW SHOWING",1024,100),h.fillStyle="#c9306e",h.font="900 150px Arial Black, Arial",h.fillText("THE PUDDING GUY",1024,270),h.fillStyle="#1d1820",h.font="700 46px Arial",h.fillText("BASED ON A TRUE STORY",1024,345)}),a=xt(s,13,2.2,Ye(r,.3),0,1.3,1.62);a.castShadow=!1;let o=[],l=Ye("#ffe8a0",2.4);for(let h=0;h<46;h++){let u=new Le(new Qn(.07,8,6),l),d=-6.9+h/46*13.8;u.position.set(d,2.55,1.66),s.add(u),o.push(u);let g=u.clone();g.position.y=.05,s.add(g),o.push(g)}e.bulbs=o;let c=new rt;c.position.set(0,8.2,1.2),t.add(c),j(c,.5,5.5,2.2,F("#26222a"),0,0,0);for(let h of[-1,1]){let u=xt(c,2,5.2,Ye(Ft("blade",256,640,f=>{f.fillStyle="#e8c45a",f.fillRect(0,0,256,640),f.fillStyle="#c9306e",f.textAlign="center",f.font="900 120px Arial Black",["C","I","N","E","M","A"].forEach((d,g)=>f.fillText(d,128,110+g*100))}),.6),h*.26,2.75,0,0,h*Math.PI/2);u.castShadow=!1}for(let h of[-1,1])j(t,1.6,2.4,.15,F("#e8c45a"),h*6.2,.8,.12),xt(t,1.4,2.2,Ye(Ft("poster"+h,256,400,u=>{u.fillStyle=h>0?"#2f6fb5":"#3f9a55",u.fillRect(0,0,256,400),u.fillStyle="#f4efe6",u.beginPath(),u.moveTo(70,140),u.lineTo(186,140),u.lineTo(170,300),u.lineTo(86,300),u.fill(),u.fillStyle="#6b3a22",u.fillRect(64,122,128,28),u.fillStyle="#fff",u.font="900 34px Arial Black",u.textAlign="center",u.fillText("PUDDING",128,60),u.fillText("GUY",128,100),u.font="700 22px Arial",u.fillText("\u2605\u2605\u2605\u2605\u2605",128,360)}),.15),h*6.2,2,.21);for(let h=-1;h<=1;h++)xt(t,1.8,2.8,Ye("#3a2a20",0),h*2.2,1.4,.11);j(t,3.2,.03,8,F("#c9303a"),0,.15,4);for(let h of[-1,1])for(let u=0;u<4;u++)Ot(t,.05,.05,1,F("#e8c45a"),h*2,.15,1+u*2,8);ns(t,-12,6,9,3),ns(t,12,6,8.5,6),ns(t,-24,8,10,7),ns(t,24,9,9,8);for(let h of[-1,1])j(t,14,9,10,F(mt(ts("nb"+h,h>0?"#e9c79a":"#b5d0c6",0),3,2)),h*17,0,-5);for(let h=0;h<4;h++){let u=xt(t,60,26,new Sn({map:aa(h+9,ko),transparent:!0,depthWrite:!1,fog:!1}),-90+h*60,45+h%2*10,-150);u.layers.set(rn),u.castShadow=!1}return{root:t,refs:e}},GS=()=>{let t=new rt,e={};jt(t,40,16,F(mt(Zu("gate","#56607a","#6d7894"),8,3)),0,2);for(let p=-18;p<=18;p+=3)j(t,.18,7,.3,F("#3b4150"),p,0,-6);j(t,40,.5,.4,F("#3b4150"),0,0,-6),j(t,40,.3,.4,F("#3b4150"),0,3.5,-6),j(t,40,.6,.4,F("#3b4150"),0,6.8,-6);let n=xt(t,40,16,F("#e8e2d8"),0,7.2,2,Math.PI/2);n.castShadow=!1;for(let p=-16;p<=16;p+=4){let y=xt(t,2.6,.3,Ye("#fff3d8",.8),p,7.18,0,Math.PI/2);y.castShadow=!1}j(t,40,7.4,.3,F(mt(ts("gateBack","#e9e1d2",0),8,2)),0,0,9.5);let i=(p,y,S,M=5)=>{let D=new rt;D.position.set(p,0,y),D.rotation.y=S,t.add(D),j(D,M*.62,.1,.08,F("#3b4150"),0,.25,0);for(let A=0;A<M;A++){let v=(A-(M-1)/2)*.62;j(D,.56,.1,.5,F("#2f6fb5"),v,.45,0),j(D,.56,.5,.08,F("#2f6fb5"),v,.55,-.24)}for(let A of[-(M*.62)/2+.1,M*.62/2-.1])j(D,.06,.45,.4,F("#3b4150"),A,0,0)};i(-6,1.5,0),i(-6,3.2,Math.PI),i(6,1.5,0),i(6,3.2,Math.PI),i(-8,6.2,0,6),i(8,6.2,0,6),j(t,2.6,1.1,.9,F("#c9b7a0"),9,0,-3.8),j(t,2.6,.08,.95,F("#3b4150"),9,1.1,-3.8);let s=mi("gate12","GATE 12",{bg:"#1d2a44",fg:"#ffd84a",w:1024,h:300,sub:"PARIS \xB7 ON TIME",subFg:"#7fe0a0"}),r=j(t,3.2,.95,.12,[F("#1d2a44"),F("#1d2a44"),F("#1d2a44"),F("#1d2a44"),Ye(s,.25),Ye(s,.25)],9,2.6,-3.8,0,!1);Ot(t,.05,.05,1.6,F("#3b4150"),8.2,3.55,-3.8,6,!1),Ot(t,.05,.05,1.6,F("#3b4150"),9.8,3.55,-3.8,6,!1);let a=new rt;a.position.set(-1.5,0,6.4),t.add(a),e.chair=a,j(a,1.1,.45,.9,F("#8a3b4a"),0,0,0),j(a,1.1,.75,.22,F("#7a2f3e"),0,.45,-.36);for(let p of[-1,1])j(a,.2,.62,.9,F("#7a2f3e"),p*.55,0,0);Ot(t,.3,.3,.55,F("#7a5236"),-.4,0,6.6,16),Ot(t,.32,.26,.55,F("#c94f45"),2.6,0,7.6,12);for(let p=0;p<6;p++){let y=new Le(new Kr(.4,0),F("#3f9a55"));y.position.set(2.6+Math.sin(p)*.3,.9+p%3*.25,7.6+Math.cos(p*2)*.3),y.castShadow=!0,t.add(y)}jt(t,600,400,F(mt(es("apron","#a7a29a",["#9c978f","#b3aea6"],3e3,6),60,40)),0,-200,-.03);for(let p=-280;p<280;p+=10)jt(t,6,.3,Ye("#ffd84a"),p,-40,-.02);for(let p=-280;p<280;p+=8){let y=new Le(new Qn(.18,6,4),Ye("#7fb0ff",2));y.position.set(p,.2,-70),t.add(y)}let o=new rt;t.add(o),e.plane=o;let l=F("#f4f2ee"),c=F("#2f6fb5"),h=new Le(new _n(2,2,32,24),l);h.rotation.z=Math.PI/2,h.position.y=3.6,h.castShadow=!0,o.add(h);let u=new Le(new Qn(2,24,16),l);u.scale.set(2,1,1),u.position.set(16,3.6,0),o.add(u);let f=new Le(new or(2,7,24),l);f.rotation.z=Math.PI/2,f.position.set(-19.5,4,0),o.add(f);let d=new Le(new _n(2.02,2.02,31,24,1,!0,0,Math.PI),c);d.rotation.set(Math.PI/2,0,Math.PI/2),d.scale.set(1,1,.18),d.position.set(0,3.3,0),j(o,32,.45,4.06,c,0,2.9,0,0,!1);for(let p=0;p<14;p++)j(o,.5,.45,4.08,Ye("#2c3e5a"),12-p*1.9,4.2,0,0,!1);let g=new Le(new kn(6,.35,34),l);g.position.set(1,2.6,0),g.castShadow=!0,o.add(g);let x=new Le(new kn(4.2,5.2,.35),c);x.position.set(-18.2,7.6,0),x.rotation.z=-.4,x.castShadow=!0,o.add(x);let m=new Le(new kn(3.5,.3,11),l);m.position.set(-20,4.6,0),o.add(m);for(let p of[-7,7]){Ot(o,1.1,1.1,.1,F("#3b4150"),2.2,0,p,8);let y=new Le(new _n(1,.9,3.6,16),F("#c9ccd2"));y.rotation.z=Math.PI/2,y.position.set(2.5,1.5,p),y.castShadow=!0,o.add(y)}for(let p of[12,-2]){Ot(o,.12,.12,1.6,F("#3b4150"),p,0,0,6);let y=new Le(new _n(.45,.45,.6,12),F("#26222a"));y.rotation.x=Math.PI/2,y.position.set(p,.45,0),o.add(y)}o.position.set(4,0,-34),j(t,3,3,22,F("#c9ccd2"),14,2.2,-18),j(t,3.04,.4,22.04,F("#2f6fb5"),14,4.6,-18),Ot(t,.3,.3,2.2,F("#3b4150"),14,0,-24,8);for(let p=0;p<6;p++)j(t,30,6+p%3*3,14,F("#8a7f96"),-150+p*60,0,-170);for(let p=0;p<7;p++){let y=xt(t,80,30,new Sn({map:aa(p+1,ko),transparent:!0,depthWrite:!1,fog:!1}),-260+p*85,40+p%3*14,-300);y.layers.set(rn),y.castShadow=!1}return{root:t,refs:e}},ju={airport:GS,davis:BS,store:US,valley:LS,dock:NS,home:FS,foodbank:OS,globe:HS,theater:zS};var st="#241726",Xd="#ffe2c2",eh="#ffffff",$u="#5a1e28",Yd="#e86e78",qd=[.96,.86,.84],ha=[.64,.66,.74],zd=[.62,.62,.7],kt=t=>t*Math.PI/180,Xo=(t,e,n)=>Math.max(e,Math.min(n,t)),gi=(t,e)=>{let n=parseInt(t.slice(1),16),i=(s,r)=>Math.min(255,Math.round(s*r)).toString(16).padStart(2,"0");return`#${i(n>>16&255,e[0])}${i(n>>8&255,e[1])}${i(n&255,e[2])}`},Ar=(t,e)=>gi(t,[e,e,e]),br=(t,e,n)=>{let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round((i>>a&255)*(1-n)+(s>>a&255)*n).toString(16).padStart(2,"0");return`#${r(16)}${r(8)}${r(0)}`},Un=(t,e)=>{let n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},th=(t,e,n,i)=>t.map(([s,r])=>[n+(s-n)*Math.cos(e)-(r-i)*Math.sin(e),i+(s-n)*Math.sin(e)+(r-i)*Math.cos(e)]),VS=(t,e,n)=>th([t],e,n[0],n[1])[0],ca=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Mr=(t,e,n,i=10)=>{let s=[2*e[0]-(t[0]+n[0])/2,2*e[1]-(t[1]+n[1])/2],r=[];for(let a=0;a<=i;a++){let o=a/i,l=1-o;r.push([l*l*t[0]+2*l*o*s[0]+o*o*n[0],l*l*t[1]+2*l*o*s[1]+o*o*n[1]])}return r},WS={jacket:"#357650",pants:"#3d4440",boots:st,hat:"shako",belt:"#f1efe6",buttons:"#d9dde0",rifle:!0},sA={...WS,hat:"shako_tall",buttons:"#e8c45a",sash:"#c0353a",sword:!0,moustache:"#4a3020",rifle:!1,belt:null,build:"stout"};var Yo=class{g;ol=12;rot=null;constructor(e){this.g=e}P(e,n){if(!this.rot)return[e,n];let i=this.rot,s=i[0],r=i[1],a=i[2],o=i.length>3?i[3]:0,l=i.length>4?i[4]:0,c=Math.cos(s),h=Math.sin(s);return[r+(e-r)*c-(n-a)*h+o,a+(e-r)*h+(n-a)*c+l]}path(e,n){let i=this.g;i.beginPath(),e.forEach((s,r)=>{let[a,o]=this.P(s[0],s[1]);r?i.lineTo(a,o):i.moveTo(a,o)}),n&&i.closePath()}poly(e,n,i){let s=this.g,r=i??this.ol;this.path(e,!0),n&&(s.fillStyle=n,s.fill()),r&&(s.lineWidth=r,s.strokeStyle=st,s.lineJoin="round",s.stroke())}ell(e,n,i,s,r,a,o=0,l=360,c=0){this.poly(XS(e,n,i,s,o,l,c),r,a)}line(e,n,i,s=!0){let r=this.g;r.lineCap="round",r.lineJoin="round",s&&(this.path(e,!1),r.strokeStyle=st,r.lineWidth=i+2*this.ol*.9,r.stroke()),this.path(e,!1),r.strokeStyle=n,r.lineWidth=i,r.stroke()}stroke(e,n,i=st){let s=this.g;s.lineCap="round",s.lineJoin="round",this.path(e,!1),s.strokeStyle=i,s.lineWidth=n,s.stroke()}arc(e,n,i,s,r,a,o,l=st){let c=[];for(let h=0;h<=24;h++)c.push([e+i*Math.cos(kt(r+(a-r)*h/24)),n+s*Math.sin(kt(r+(a-r)*h/24))]);this.stroke(c,o,l)}dot(e,n,i,s=st){let[r,a]=this.P(e,n);this.g.beginPath(),this.g.arc(r,a,i,0,Math.PI*2),this.g.fillStyle=s,this.g.fill()}clip(e,n){let i=this.g;i.save(),this.path(e,!0),i.clip(),n(),i.restore()}shadedFill(e,n,i,s,r,a=.45,o=1.05,l=1.25){let c=this.g,h=e.length,u=0,f=0;for(let[m,p]of e)u+=m/h,f+=p/h;let[d,g]=this.P(u+Math.cos(s)*a*r,f+Math.sin(s)*a*r),x=c.createRadialGradient(d,g,0,d,g,l*r);x.addColorStop(0,n),x.addColorStop(o/l,n),x.addColorStop(1,i),this.path(e,!0),c.fillStyle=x,c.fill()}gradFill(e,n,i,s,r=.22){let a=this.g,o=Math.cos(s),l=Math.sin(s),c=e.length,h=0,u=0,f=1/0,d=-1/0;for(let[M,D]of e){h+=M/c,u+=D/c;let A=M*o+D*l;f=Math.min(f,A),d=Math.max(d,A)}let g=h*o+u*l,[x,m]=this.P(h+o*(d-g),u+l*(d-g)),[p,y]=this.P(h+o*(f-g),u+l*(f-g)),S=a.createLinearGradient(x,m,p,y);S.addColorStop(0,n),S.addColorStop(r,n),S.addColorStop(1,i),this.path(e,!0),a.fillStyle=S,a.fill()}inkRing(e,n,i,s=.45,r=st){let a=e.length,o=0,l=0;for(let[d,g]of e)o+=d/a,l+=g/a;let c=[],h=[];e.forEach((d,g)=>{let x=e[(g+a-1)%a],m=e[(g+1)%a],p=m[1]-x[1],y=x[0]-m[0],S=Math.hypot(p,y)||1;p/=S,y/=S;let M=.5*n*(1+s*Math.cos(Math.atan2(d[1]-l,d[0]-o)-i));c.push([d[0]+p*M,d[1]+y*M]),h.push([d[0]-p*M,d[1]-y*M])});let u=this.g,f=d=>{d.forEach(([g,x],m)=>{let[p,y]=this.P(g,x);m?u.lineTo(p,y):u.moveTo(p,y)}),u.closePath()};u.beginPath(),f(c),f(h.reverse()),u.fillStyle=r,u.fill("evenodd")}band(e,n,i,s,r="butt"){let a=this.g;a.lineCap=r,a.lineJoin="round",this.path(e,!1),a.strokeStyle=st,a.lineWidth=i+2*s,a.stroke(),this.path(e,!1),a.strokeStyle=n,a.lineWidth=i,a.stroke(),a.lineCap="round"}},XS=(t,e,n,i,s=0,r=360,a=0,o=48)=>{let l=kt(a),c=[];for(let h=0;h<=o;h++){let u=kt(s+(r-s)*h/o),f=n*Math.cos(u),d=i*Math.sin(u);c.push([t+f*Math.cos(l)-d*Math.sin(l),e+f*Math.sin(l)+d*Math.cos(l)])}return c};var qo=(t,e,n,i,s,r=st)=>{let a=n[0]-e[0],o=n[1]-e[1],l=Math.hypot(a,o)||1,c=-o/l,h=a/l;t.poly([[e[0]+c*i/2,e[1]+h*i/2],[n[0]+c*s/2,n[1]+h*s/2],[n[0]-c*s/2,n[1]-h*s/2],[e[0]-c*i/2,e[1]-h*i/2]],r,0),t.dot(e[0],e[1],i/2,r),t.dot(n[0],n[1],s/2,r)},Rs=(t,e,n,i=72)=>{let s=[Un(n.seed,11),Un(n.seed,12),Un(n.seed,13)].map(a=>a*Math.PI*2),r=[];for(let a=0;a<i;a++){let o=a/i*Math.PI*2,l=Math.cos(o),c=Math.sin(o),h=2/(c<0?n.nTop:n.nBot),u=Math.sign(l)*Math.abs(l)**h,f=Math.sign(c)*Math.abs(c)**h;u*=(1+n.egg*f)*(1+n.asym*Math.sign(u));let d=1+n.noise*(Math.cos(2*o+s[0])+.7*Math.cos(3*o+s[1])+.5*Math.cos(4*o+s[2])),g=n.a*u*d,x=n.b*f*d;r.push([t+g*Math.cos(n.rot)-x*Math.sin(n.rot),e+g*Math.sin(n.rot)+x*Math.cos(n.rot)])}return r},Kd=(t,e=118,n=0)=>({a:e,b:e*(.94+.08*(Un(t,1)-.5)),nTop:1.75+.3*(Un(t,2)-.5),nBot:2.3+.3*(Un(t,3)-.5),egg:-.12+.06*(Un(t,4)-.5),asym:(.06+.04*Un(t,5))*(n||(Un(t,6)<.5?-1:1)),rot:kt(8*(Un(t,7)-.5)),noise:.008,seed:t}),Qd=t=>Math.atan2(-Math.sin(t)+.8,-Math.cos(t)),Zd=kt(-120),Jd={neutral:{eye:["lid","lid"],brow:[0,-1],mouth:"dash"},stern:{eye:["lid","lid"],brow:[3,-2],mouth:"frown"},grin:{eye:["happy","happy"],brow:[-3,-3],mouth:"grin"},laugh:{eye:["squeeze","squeeze"],brow:[-4,-4],mouth:"laugh"},whistle:{eye:["dash","dash"],brow:[-2,-4],mouth:"o"},nervous:{eye:["small","small"],brow:[-3,2],mouth:"wave"},shock:{eye:["shock","shock"],brow:[-7,-6],mouth:"O"},relief:{eye:["happy","happy"],brow:[-2,1],mouth:"smileWide"},relief_open:{eye:["happy","happy"],brow:[-2,1],mouth:"grin"},dazed:{eye:["spiral","spiral"],brow:[-3,2],mouth:"wave"},pained:{eye:["squeeze","lid"],brow:[-3,2],mouth:"teeth"},smile:{eye:["dot","dot"],brow:[0,-1],mouth:"smirk"},smile_closed:{eye:["happy","happy"],brow:[0,-1],mouth:"smile"},lick:{eye:["dot","dot"],brow:[0,-1],mouth:"lick"}},YS=t=>t==="dot"||t==="small"?"lid":t==="lid"?"slit":t==="shock"?"shockHalf":t,jd=(t,e)=>e>=1&&t!=="happy"&&t!=="squeeze"&&t!=="spiral"?"dash":e>0?YS(t):t,$d=t=>t===!0?1:Number(t)||0,ep=(t,e,n,i,s,r,a,o)=>{let l=n+a*3*s,c=3.8*s;switch(e){case"dot":t.ell(l,i,3.8*s,5.5*s,st,0);break;case"small":t.ell(l,i,3*s,4.4*s,st,0);break;case"lid":t.ell(l,i-s,7*s,6*s,st,0,0,180),t.stroke([[n-9*s,i-s],[n+9*s,i-s]],c);break;case"slit":t.ell(l,i,7*s,2.6*s,st,0,0,180),t.stroke([[n-9*s,i],[n+9*s,i]],c);break;case"happy":t.arc(n,i+3*s,8*s,6*s,200,340,c);break;case"dash":t.stroke([[n-8.5*s,i],[n+8.5*s,i]],c);break;case"squeeze":t.stroke([[n+6*s*r,i-5*s],[n-6*s*r,i],[n+6*s*r,i+5*s]],c);break;case"shock":case"shockHalf":t.ell(n,i,11*s,11*s,eh,2.6*s),t.dot(l-r*1.5*s,i+1.5*s,3*s),e==="shockHalf"&&(t.ell(n,i,11*s,11*s,o,0,180,360),t.stroke([[n-11*s,i],[n+11*s,i]],2.6*s));break;default:{let h=[];for(let u=1;u<15;u++)h.push([n+Math.cos(u*.9)*u*.55*s,i+Math.sin(u*.9)*u*.55*s]);t.stroke(h,2.4*s)}}},Gd=(t,e,n,i,s,r,a=!1)=>{t.ell(e,n,i,s,$u,0,0,180),t.clip([[e-i,n],[e+i,n],[e+i,n+3*r],[e-i,n+3*r]],()=>t.ell(e,n,i,s,eh,0,0,180)),a&&t.ell(e+2*r,n+.62*s,.4*i,.28*s,Yd,0),t.ell(e,n,i,s,null,3*r,0,180)},tp=(t,e,n,i,s,r=1)=>{let a=4*s;switch(e){case"dash":t.stroke([[n-5.5*s*r,i],[n+5.5*s*r,i-.8*s]],a);break;case"frown":t.arc(n,i+3*s,6.5*s*r,3.5*s,200,340,a);break;case"smirk":t.arc(n+s,i-3*s,7*s*r,4*s,10,150,a);break;case"smile":t.arc(n,i-3*s,8*s*r,4.5*s,20,160,a);break;case"smileWide":t.arc(n,i-4*s,11*s*r,6*s,15,165,a);break;case"grin":Gd(t,n,i-s,12*s*r,8*s,s);break;case"laugh":Gd(t,n,i,16*s*r,11*s,s,!0);break;case"o":t.ell(n+4*s,i,3.5*s,4*s,$u,2.8*s);break;case"O":t.ell(n,i+2*s,9*s*r,11*s,$u,3.2*s);break;case"wave":{let o=[];for(let l=0;l<=12;l++)o.push([n-9*s*r+l*1.5*s*r,i+1.5*s*Math.sin(l*1.3)]);t.stroke(o,3*s);break}case"teeth":t.poly([[n-12*s*r,i-4*s],[n+12*s*r,i-4*s],[n+11*s*r,i+4*s],[n-11*s*r,i+4*s]],eh,3*s);for(let o of[-1,0,1])t.stroke([[n+o*6*s*r,i-4*s],[n+o*6*s*r,i+4*s]],1.5*s);break;case"lick":t.arc(n,i-3*s,8*s*r,4.5*s,20,160,a),t.ell(n+6*s*r,i+3*s,3.6*s,4.6*s,Yd,2.4*s);break}},_r={on:!1},qS=(t,e,n,i,s,r,a,o,l,c,h,u=!1)=>{let f=i/100,d=Jd[s],g=e+7*f*r,x=(d.eye[0]==="shock"?12:13)*f,m=n;for(let S of[-1,1]){let M=g+S*x,D=jd(d.eye[(r?S===r:S>0)?1:0],o);ep(t,D,M,m,f,S,a,c);let[A,v]=d.brow,P=m-(l?17:20)*f;D==="shock"||D==="shockHalf"?t.arc(M,P-6*f,9*f,3*f,200,340,4*f):qo(t,[M-S*8.5*f,P+A*f],[M+S*8.5*f,P+v*f],5*f,2.5*f)}if(_r.on){for(let S of[-1,1])t.ell(g+S*x,m,10.5*f,9*f,null,3*f);t.stroke([[g-x+10.5*f,m-2*f],[g+x-10.5*f,m-2*f]],3*f)}let p=e+8*f*r,y=n+20*f;if(tp(t,d.mouth,p,y,f),h)for(let S of[-1,1])qo(t,[p+S*1.5*f,n+12.5*f],[p+S*(u?19:15)*f,n+(u?10.5:15)*f],u?5.5*f:4.5*f,1.6*f,h);s==="nervous"&&t.ell(e+40*f*(r||1),n-22*f,3*f,5*f,"#9fd4ff",2*f)};var KS=(t,e,n,i,s,r,a,o,l,c=!1)=>{let h=i/100,u=Jd[s],f=e+27*h,d=n,g=jd(u.eye[1],r);ep(t,g,f,d,h,1,.6,o);let x=d-(a?17:20)*h,[m,p]=u.brow;g==="shock"||g==="shockHalf"?t.arc(f,x-6*h,9*h,3*h,200,340,4*h):qo(t,[f+8*h,x+m*h],[f-7*h,x-h+p*h],5*h,2.5*h),t.stroke([[e+44*h,n+4*h],[e+47.5*h,n+9*h],[e+43*h,n+10*h]],3*h),_r.on&&(t.ell(f+1*h,d,9*h,9*h,null,3*h),t.stroke([[f-8*h,d-2*h],[e-6*h,d-4*h]],2.6*h)),tp(t,u.mouth,e+33*h,n+21*h,h,.62),l&&qo(t,[e+41*h,n+13.5*h],[e+25*h,n+(c?11.5:16)*h],c?5.5*h:4.5*h,1.6*h,l),s==="nervous"&&t.ell(e-30*h,n-24*h,3*h,5*h,"#9fd4ff",2*h)},Vd="#e9cf8f",Wd="#d6b46a",np=(t,e,n,i,s,r,a,o,l)=>{if(e.hat!=="bonnet")return;let c=Rs(i-(l?12:0)*(n.a/50),s-.07*2*n.b,{...n,a:n.a*1.17,b:n.b*1.13,asym:0,egg:.04,seed:n.seed+3});t.shadedFill(c,Vd,gi(Vd,ha),r,n.a*1.17),t.inkRing(c,o*.85,a)},ip=(t,e,n,i,s,r,a,o,l,c)=>{let h=2*i.a,u=2*i.b,f=h/100,d=r-i.b,g=.85*5*f,x=i.rot+kt(4*(Un(o,20)-.5)),m=y=>th(y,x,s,r),p=(y,S)=>{let M=[];for(let D=0;D<=12;D++){let A=D/12;M.push([s+S*(2*A-1),y+3*f*(1-(2*A-1)**2)])}return M};if(e.hat==="shako"||e.hat==="shako_tall"){let y=e.hat==="shako_tall",S=d+.25*u,M=(y?.66:.56)*u,D=46*f,A=52*f,v=m([...p(S,D).reverse(),[s-A,S-M],[s+A,S-M]]);t.shadedFill(v,"#3a3d47","#24262d",a,A,.4),y&&t.clip(v,()=>t.band(m([[s-A-5*f,S-M+.07*u],[s+A+5*f,S-M+.07*u]]),"#e8c45a",.06*u,1.5*f)),t.poly(v,null,g);let P=x*180/Math.PI;if(c){t.poly(m([[s+36*f,S-1*f],[s+60*f,S+8*f],[s+34*f,S+6*f]]),"#16171b",2.5*f);let[w,b]=m([[s+24*f,S-M-6*f]])[0];t.ell(w,b,7*f,7*f,"#2b7a4b",2.5*f)}else{let[w,b]=m([[s+3*f*l,S+3*f]])[0];t.ell(w,b,34*f,.045*u,"#16171b",2.5*f,0,180,P);let[R,U]=m([[s,S-.45*M]])[0];t.ell(R,U,7*f,6*f,y?"#e8c45a":"#c9ccd2",2*f,0,360,P),t.arc(R,U,3.5*f,2.8*f,200,500,1.6*f);let[k,V]=m([[s,S-M-6*f]])[0];t.ell(k,V,7*f,7*f,"#2b7a4b",2.5*f)}}else if(e.hat==="cap"||e.hat==="hair"){let y=d+(e.hat==="cap"?.3:.42)*u,S=(P,w)=>w<y||c&&e.hat==="hair"&&P<s-6*f&&w<r+.42*i.b,M=n.length,D=Math.max(0,n.findIndex(([P,w],b)=>S(P,w)&&!S(n[(b+M-1)%M][0],n[(b+M-1)%M][1]))),A=[...n.slice(D),...n.slice(0,D)].filter(([P,w])=>S(P,w)).map(([P,w])=>[s+(P-s)*1.03,r+(w-r)*1.03]);if(A.length<3)return;if(e.hat==="hair"){let[P,w]=A[A.length-1],[b,R]=A[0];for(let U=1;U<6;U++)A.push([P+(b-P)*U/6,w+(R-w)*U/6+(U%2?4*f:0)])}let v=e.hat==="cap"?e.cap:e.hair;if(t.shadedFill(A,v,gi(v,zd),a,i.a,.35),t.poly(A,null,g),e.hat==="hair"){let P=c?-1:l||1;t.stroke([[s+P*10*f,y-30*f],[s+P*2*f,y-12*f]],1.2*f)}if(e.hat==="cap"){let P=x*180/Math.PI;if(c)t.poly(m([[s+40*f,y-2*f],[s+74*f,y+4*f],[s+40*f,y+6*f]]),Ar(v,.8),g);else{let w=l||(Un(o,21)<.5?-1:1),[b,R]=m([[s+w*4*f,y+1.5*f]])[0];t.ell(b,R,32*f,.06*u,Ar(v,.8),g,0,180,P)}}}else if(e.hat==="tophat"){let y=d+.22*u,S=.8*u,M=.31*h,D=.33*h,A="#2e2a36",v=m([...p(y,M).reverse(),[s-D,y-S],[s+D,y-S]]);t.shadedFill(v,A,gi(A,zd),a,D,.4),t.clip(v,()=>t.band(m([[s-D-4*f,y-.13*u],[s+D+4*f,y-.13*u]]),Ar(e.jacket,.9),.14*u,.8*f)),t.poly(v,null,g);let[P,w]=m([[s,y+1*f]])[0];t.ell(P,w,.45*h,.05*u,"#1d1b22",g,0,360,x*180/Math.PI)}else if(e.hat==="bonnet"){let[y,S]=m([[s+(c?6*f:0),d+.16*u]])[0];t.arc(y,S,.5*h,.2*u,200,340,7*f,Wd),t.arc(y,S,.5*h+3.5*f,.2*u+3.5*f,200,340,1.2*f);let M=r+i.b*.98;t.stroke([[s-14*f,M-4*f],[s,M+2*f],[s+14*f,M-4*f]],2*f,Wd)}},sp={adult:{a:118,torso:1.1,legs:1.4,tw:.8},stout:{a:118,torso:1.15,legs:1.32,tw:.92},kid:{a:112,torso:.85,legs:1,tw:.72}},ua=(t,e,n,i,s)=>{s!==st&&t.stroke([e,n],i+3,st),t.stroke([e,n],i,s)},rp=(t,e,n)=>{let{phase:i=0,expr:s="neutral",mode:r="march",look:a=0,blink:o=!1,lift:l=60,prop:c=null,tilt:h=0,headTilt:u=0,wave:f,light:d=Zd,facing:g=0,seed:x=1}=n,m=sp[e.build??"adult"],p=e.skin??Xd,y=Math.PI*2,S=$d(o),M=Kd(x,m.a,g),D=2*M.a,A=2*M.b,v=D/100,P=(1+m.torso+m.legs)*A,w=975,b=r==="march"?.025*P*Math.cos(2*y*i):r==="stroll"?.015*P*Math.cos(2*y*i):0,R=r==="sit"?w-.2*A:w-m.legs*A+b,U=R-m.torso*A,k=U-M.b,V=k-M.b,X=R-.12*A,W=Qd(d),$=5*v,Y=br(e.pants,st,.55),se=br(e.jacket,st,.5),de=e.boots,Ee=5.8*v,ze=7.5*v;if(t.rot=null,r==="sit")for(let T of[-1,1]){let I=[300+T*15*v,X],H=[300+T*36*v,X+.2*A],q=[300+T*44*v,w-8*v];t.stroke(Mr(I,H,q),Ee,Y),ua(t,[q[0]-T*2*v,q[1]],[q[0]+T*12*v,q[1]-5*v],ze,de)}else if(r==="fall")[[[300-15*v,X],[300-46*v,X+.5*A],[300-70*v,X+.72*A]],[[300+15*v,X],[300+50*v,X+.45*A],[300+76*v,X+.22*A]]].forEach(([I,H,q],ue)=>{t.stroke(Mr(I,H,q),Ee,Y),ua(t,q,[q[0]+(ue?14:-14)*v,q[1]+(ue?-6:4)*v],ze,de)});else if(e.dress)for(let T of[-1,1]){let I=300+T*12*v,H=w-4*v;t.stroke([[I,w-.4*A],[I+T*v,H]],Ee,Y),ua(t,[I-T*3*v,H],[I+T*12*v,H+v],ze,de)}else{let T=r==="march"?l*1.25:r==="stroll"?l*.55:0;for(let[I,H]of[[-1,0],[1,.5]]){let q=Math.max(0,Math.sin(y*(i+H)))*T,ue=300+I*15*v,ce=300+I*22*v,me=w-4*v-q,it=[(ue+ce)/2+I*(1.5*v+q*.16),(X+me)/2-q*.08];t.stroke(Mr([ue,X],it,[ce,me]),Ee,Y),ua(t,[ce-I*3*v,me],[ce+I*13*v,me+.5*v],ze,de)}}let Ze=r==="march"?1.6*Math.sin(y*i):r==="stroll"?1*Math.sin(y*i):0,Z=h+Ze;t.rot=Z?[kt(Z),300,X]:null;let re=!!e.dress&&r!=="sit"&&r!=="fall",ie={a:m.tw/2*D/1.06,b:.5*(R-(U-.25*A)),nTop:2.2,nBot:2.6,egg:e.build==="stout"?.17:.12,asym:.04*g,rot:0,noise:.006,seed:x+7},ee=300+3*v*g,Ne=R-ie.b,Se=Rs(ee,Ne,ie),Pe=T=>[ee+T*.85*ie.a,U+.12*A],ft=(T,I)=>{let H=Pe(T),q=ee+T*(1.12*ie.a+4*v),ue=q+T*3*v-T*6*v*Math.max(0,I)+T*4*v*Math.max(0,-I);return[H,[q,H[1]+.48*A],[ue,U+1.04*A-Math.abs(I)*9*v]]},nt=r==="march"||r==="stroll"?Math.sin(y*i):0,bt=[300+47*v,R+.12*A],O=[300+64*v,V-.32*A],Dt=!!e.rifle&&(r==="march"||r==="stand"||r==="stroll"),we=[];if(r==="sit")for(let T of[-1,1])we.push({pts:[Pe(T),[ee+T*(1.1*ie.a+6*v),Pe(T)[1]+.4*A],[ee+T*(1.2*ie.a+10*v),R+.04*A]],front:!1});else if(r==="fall")for(let T of[-1,1])we.push({pts:[Pe(T),[ee+T*(1.15*ie.a+12*v),Pe(T)[1]-.25*A],[ee+T*(1.3*ie.a+24*v),Pe(T)[1]-.68*A]],front:!1});else if(c==="box"||c==="peel")for(let T of[-1,1]){let I=Pe(T),H=c==="box"?I[1]+.42*A:I[1]+.3*A;we.push({pts:[I,[ee+T*(1.12*ie.a+6*v),I[1]+.3*A],[ee+T*(c==="box"?.62:.18)*ie.a,H]],front:!0})}else if(c==="cheer")for(let T of[-1,1]){let I=Pe(T);we.push({pts:[I,[ee+T*(1.2*ie.a+14*v),I[1]-.3*A],[ee+T*(1.25*ie.a+18*v),I[1]-.78*A]],front:!1})}else if(we.push({pts:c==="shako"?ft(-1,0):ft(-1,-nt),front:!1}),Dt){let T=ca(bt,O,.1);we.push({pts:[Pe(1),[ee+1.12*ie.a+5*v,Pe(1)[1]+.45*A],T],front:!1})}else if(f!==void 0){let T=Pe(1);we.push({pts:[T,[ee+1.1*ie.a+10*v+3*v*f,T[1]-.22*A],[ee+1.18*ie.a+16*v+12*v*f,T[1]-.6*A]],front:!1})}else if(c==="icecream"||c==="pudding"||c==="phone"||c==="clipboard"||c==="receipt"){let T=Pe(1);we.push({pts:[T,[ee+1.05*ie.a+4*v,T[1]+.45*A],[ee+.5*ie.a,T[1]+.4*A]],front:!0})}else if(Array.isArray(c)){let T=Pe(1),I=Xo(c[1],0,1),H=ca([ee+1.1*ie.a+10*v,T[1]-.15*A],[ee+1.2*ie.a+10*v,T[1]+.3*A],I),q=ca([ee+1.15*ie.a+14*v,T[1]-.55*A],[ee+1.45*ie.a+22*v,T[1]+.35*A],I);we.push({pts:[T,H,q],front:!0})}else we.push({pts:ft(1,nt),front:!1});let qe=T=>{t.stroke(Mr(T.pts[0],T.pts[1],T.pts[2]),5.2*v,se),t.dot(T.pts[2][0],T.pts[2][1],5.5*v)};if(Dt&&(t.band([bt,O],"#7a4b2a",5*v,1.5*v,"round"),t.band([ca(bt,O,.6),O],"#8d949c",2.4*v,1.2*v,"round")),e.sword&&r!=="sit"){let T=[ee-.75*ie.a,R-.2*A];t.band([T,[T[0]-Math.sin(kt(25))*.8*A,T[1]+Math.cos(kt(25))*.8*A]],"#c9ccd2",3*v,1.2*v,"round")}for(let T of we)T.front||qe(T);if(re){let T={a:.5*D*.98,b:.5*(w-.35*A-(U-.2*A)),nTop:2,nBot:3,egg:.35,asym:.03*g,rot:0,noise:.006,seed:x+9},I=Rs(300,w-.35*A-T.b,T);t.gradFill(I,e.dress,gi(e.dress,ha),d),t.inkRing(I,$,W);let H={a:.37*D,b:.3*A,nTop:2.2,nBot:2.4,egg:.1,asym:0,rot:0,noise:.006,seed:x+8},q=Rs(300,U+.12*A,H);t.gradFill(q,e.jacket,gi(e.jacket,ha),d),t.inkRing(q,$*.9,W)}else{if(t.gradFill(Se,e.jacket,gi(e.jacket,ha),d),t.clip(Se,()=>{if(e.plaid){for(let T=-6;T<=6;T++)t.stroke([[ee+T*11*v,U-A],[ee+T*11*v,R+A]],3.2*v,e.plaid);for(let T=0;T<10;T++){let I=U+T*11*v;t.stroke([[ee-2*D,I],[ee+2*D,I]],3.2*v,e.plaid)}}if(e.collar)for(let T of[-1,1])t.poly([[ee,U+2*v],[ee+T*17*v,U-3*v],[ee+T*13*v,U+13*v]],e.collar,1.6*v);if(e.belt){for(let H of[-1,1])t.band([[ee-H*.75*ie.a,U-.05*A],[ee+H*.8*ie.a,R-.1*A]],e.belt,5.5*v,1.8*v);let T=ee+.025*ie.a,I=U-.05*A+(R-.1*A-(U-.05*A))*(.75/1.55);t.poly([[T-3.5*v,I-3.5*v],[T+3.5*v,I-3.5*v],[T+3.5*v,I+3.5*v],[T-3.5*v,I+3.5*v]],"#d9dde0",1.5*v)}e.sash&&t.band([[ee-1.3*ie.a,R-.32*A],[ee+1.3*ie.a,R-.32*A]],e.sash,.13*A,1.8*v);for(let T=0;T<4;T++){let I=U+.12*A+T*.2*A;e.sash&&Math.abs(I-(R-.32*A))<.08*A||(t.dot(ee+2*v*g,I,2.2*v+.8*v,st),t.dot(ee+2*v*g,I,2.2*v,e.buttons??Ar(e.jacket,.7)))}}),e.sash){let T=g||1;t.poly([[ee+T*.55*ie.a,R-.3*A],[ee+T*.75*ie.a,R+.05*A],[ee+T*.45*ie.a,R+.02*A]],e.sash,1.6*v)}t.inkRing(Se,$,W)}for(let T of we)if(T.front){qe(T);let[I,H]=T.pts[2];if(c==="icecream")t.poly([[I-8*v,H-12*v],[I+8*v,H-12*v],[I,H+7*v]],"#e0a35a",1.8*v),t.ell(I,H-19*v,11*v,10*v,"#f7c6d9",2.2*v),t.dot(I,H,5.5*v);else if(c==="pudding")t.poly([[I-9*v,H-16*v],[I+9*v,H-16*v],[I+7*v,H+4*v],[I-7*v,H+4*v]],"#f4efe6",1.8*v),t.poly([[I-9*v,H-16*v],[I+9*v,H-16*v],[I+9*v,H-12*v],[I-9*v,H-12*v]],"#6b3a22",1.4*v),t.poly([[I-8*v,H-8*v],[I+8*v,H-8*v],[I+7.5*v,H-2*v],[I-7.5*v,H-2*v]],"#3f9a55",0),t.dot(I,H,5.5*v);else if(c==="phone")t.poly([[I-7*v,H-22*v],[I+7*v,H-22*v],[I+7*v,H+2*v],[I-7*v,H+2*v]],"#2c3446",1.6*v),t.poly([[I-5*v,H-19*v],[I+5*v,H-19*v],[I+5*v,H-2*v],[I-5*v,H-2*v]],"#8fe0ff",0),t.dot(I,H,5.5*v);else if(c==="clipboard"||c==="receipt"){let q=c==="receipt";t.poly([[I-14*v,H-(q?40:26)*v],[I+12*v,H-(q?40:26)*v],[I+12*v,H+8*v],[I-14*v,H+8*v]],q?"#fbfaf4":"#c08a52",1.8*v),q||t.poly([[I-10*v,H-22*v],[I+8*v,H-22*v],[I+8*v,H+4*v],[I-10*v,H+4*v]],"#fbfaf4",0);for(let ue=0;ue<(q?7:4);ue++)t.stroke([[I-9*v,H-(q?34:17)*v+ue*5*v],[I+(ue%2?2:6)*v,H-(q?34:17)*v+ue*5*v]],1.4*v,"#8a8f9a");t.dot(I,H,5.5*v)}else if(Array.isArray(c)){let q=kt(-70+105*Xo(c[1],0,1)),ue=ce=>th(ce,q,I,H);t.band(ue([[I,H+12*v],[I,H-44*v]]),"#8a5a34",5*v,1.5*v,"round"),t.poly(ue([[I-12*v,H-58*v],[I+20*v,H-58*v],[I+20*v,H-42*v],[I-12*v,H-42*v]]),"#7d848c",2.2*v),t.dot(I,H,5.5*v)}}if(c==="box"){let T=we[0].pts[2][1];t.poly([[ee-.95*ie.a,T-30*v],[ee+.95*ie.a,T-30*v],[ee+.95*ie.a,T+18*v],[ee-.95*ie.a,T+18*v]],"#c99a5e",2.2*v),t.stroke([[ee-.95*ie.a,T-18*v],[ee+.95*ie.a,T-18*v]],2*v,"#8f6a3c"),t.ell(ee,T-2*v,9*v,7*v,"#6b3a22",1.4*v);for(let I of[-1,1])t.dot(ee+I*.62*ie.a,T,5.5*v)}if(c==="peel"){let[T,I]=we[1].pts[2];t.poly([[T-8*v,I-14*v],[T+8*v,I-14*v],[T+6*v,I+4*v],[T-6*v,I+4*v]],"#f4efe6",1.8*v),t.poly([[T-5*v,I-9*v],[T+4*v,I-9*v],[T+4*v,I-3*v],[T-5*v,I-3*v]],"#ffffff",1.2*v);for(let H=0;H<5;H++)t.stroke([[T-4*v+H*2*v,I-8*v],[T-4*v+H*2*v,I-4*v]],.8*v)}if(c==="shako"){let[T,I]=we[0].pts[2];t.poly([[T-14*v,I+3*v],[T+14*v,I+3*v],[T+16*v,I+30*v],[T-16*v,I+30*v]],"#3a3d47",2.2*v),t.ell(T,I+31*v,3.5*v,3.5*v,"#2b7a4b",1.5*v),t.dot(T,I,5.5*v)}let Ie=Z+u,[Mt,ae]=VS([300,U],kt(Z),[300,X]);t.rot=Ie?[kt(Ie),300,U,Mt-300,ae-U]:null,np(t,e,M,300,k,d,W,$,!1);let C=Rs(300,k,M);t.shadedFill(C,p,gi(p,qd),d,M.a),t.inkRing(C,$,W),ip(t,e,C,M,300,k,d,x,g,!1);let _=!!e.hat&&e.hat!=="hair"&&e.hat!=="bonnet"&&e.hat!=="cap";_r.on=!!e.glasses,qS(t,300,k,D,s,g,a,S,_,p,e.moustache,e.build==="stout"),_r.on=!1,t.rot=null},QS=(t,e,n,i)=>{let s=e[0]-t[0],r=e[1]-t[1],a=Xo(Math.hypot(s,r),1,n+i-.01),o=Math.acos(Xo((n*n+a*a-i*i)/(2*n*a),-1,1)),l=Math.atan2(r,s)-o;return[t[0]+n*Math.cos(l),t[1]+n*Math.sin(l)]},ZS=733,ap=(t,e,n)=>{let{phase:i=0,expr:s="neutral",mode:r="march",blink:a=!1,stomp:o=1,pose:l=0,stride:c=1,light:h=Zd,seed:u=1}=n,f=sp[e.build??"adult"],d=e.skin??Xd,g=Math.PI*2,x=$d(a),m={...Kd(u,f.a,1),asym:.12,rot:kt(3+3*(Un(u,7)-.5))},p=2*m.a,y=2*m.b,S=p/100,M=975,D=M-4*S,A=Qd(h),v=5*S,P=(f.legs+.12)*y-4*S,w=P/2,b=P/2,R=br(e.pants,st,.55),U=br(e.pants,st,.75),k=e.boots,V=[],X=D-P*.995,W=0,$=0;if(r==="march"){let ae=370*c,C=Math.max(22,40+70*(o-1)),_=ue=>{let ce=((i+ue)%1+1)%1;if(ce<.5){let it=ce/.5;return{x:ae/2-ae*it,h:0,stance:!0,s:it}}let me=(ce-.5)/.5;return{x:-ae/2+ae*me-ae/Math.PI*Math.sin(2*Math.PI*me),h:C*Math.sin(Math.PI*me),stance:!1,s:me}},T=_(0),I=_(.5),H=T.stance?T:I,q=P*(1-.035*Math.sin(Math.PI*H.s));X=D-Math.sqrt(Math.max(1,q*q-H.x*H.x));for(let[ue,ce]of[[I,!1],[T,!0]])V.push({ank:[300+ue.x,D-ue.h],pitch:ue.stance?0:kt(35*Math.sin(Math.PI*ue.s)*(1-1.6*ue.s)),near:ce});W=4+3*Math.cos(2*g*i),$=T.x/(ae/2)}else if(r==="push")X=D-.87*P,V.push({ank:[300-.5*P,D],pitch:kt(-8),near:!1},{ank:[300+.32*P,D],pitch:0,near:!0}),W=14*l;else if(r==="swing"){X=ZS;let ae=kt(60*l);for(let[C,_]of[[-6,!1],[0,!0]]){let T=[300+w*.98+C*S,X+6*S];V.push({ank:[T[0]+b*Math.sin(ae),T[1]+b*Math.cos(ae)],pitch:-ae*.5,near:_})}}else V.push({ank:[300-4*S,D],pitch:0,near:!1},{ank:[300+4*S,D],pitch:0,near:!0});let Y=X+.12*y,se=Y-f.torso*y,de=se-m.b,Ee=de-m.b,ze=[300,X];t.rot=null;for(let ae of V){let C=r==="swing"?[300+w*.98+(ae.near?0:-6*S),X+6*S]:QS(ze,ae.ank,w,b),_=[300+(ae.near?0:-5*S),X];t.stroke([_,C,ae.ank],5.8*S,ae.near?R:U);let T=Math.cos(ae.pitch),I=Math.sin(ae.pitch);ua(t,[ae.ank[0]-3*S*T,ae.ank[1]-3*S*I],[ae.ank[0]+13*S*T,ae.ank[1]+13*S*I+.5*S],7.5*S,ae.near?k:k===st?st:Ar(k,.82))}t.rot=W?[kt(W),300,X]:null;let Ze={a:(e.build==="stout"?.36:.31)*p,b:.5*(Y-(se-.25*y)),nTop:2.2,nBot:2.5,egg:.1,asym:.06,rot:0,noise:.006,seed:u+7},Z=300+2*S,re=Y-Ze.b,ie=Rs(Z,re,Ze),ee=br(e.jacket,st,.5),Ne=br(e.jacket,st,.68),Se=[Z+.05*Ze.a,se+.14*y],Pe=.95*y,ft=ae=>{let C=[Se[0]+Math.sin(ae)*Pe*.5,Se[1]+Math.cos(ae)*Pe*.5],_=ae+kt(16)*Math.sign(ae||1);return[Se,C,[C[0]+Math.sin(_)*Pe*.5,C[1]+Math.cos(_)*Pe*.5]]},nt=!!e.rifle&&(r==="march"||r==="stand"),bt=[Z+.72*Ze.a,se+.58*y],O=[Z-.95*Ze.a-22*S,Ee-.4*y],Dt,we;if(r==="swing")Dt=[Se,[Se[0]+12*S,Se[1]-.16*y],[300+6*S,se-.3*y]],we=[Se,[Se[0]+8*S,Se[1]-.18*y],[300+2*S,se-.36*y]];else if(r==="push"){let ae=.55*y+.45*y*l,C=[Se[0]+ae,Se[1]+.06*y];if(n.hand){let _=-kt(W),T=n.hand[0]-300,I=n.hand[1]-X,H=[300+T*Math.cos(_)-I*Math.sin(_),X+T*Math.sin(_)+I*Math.cos(_)];C=[C[0]+(H[0]-C[0])*l,C[1]+(H[1]-C[1])*l]}Dt=[Se,[(Se[0]+C[0])/2,(Se[1]+C[1])/2+.06*y],C],we=[Se,[(Se[0]+C[0])/2-4*S,(Se[1]+C[1])/2-.02*y],[C[0]-6*S,C[1]-.08*y]]}else nt?(Dt=[Se,[Se[0]-4*S,Se[1]+.42*y],bt],we=ft(r==="march"?kt(30)*$:0)):(Dt=ft(kt(-30)*$),we=r==="march"?ft(kt(30)*$):null);we&&(t.stroke(Mr(we[0],we[1],we[2]),5.2*S,Ne),t.dot(we[2][0],we[2][1],5.5*S)),t.gradFill(ie,e.jacket,gi(e.jacket,ha),h),t.clip(ie,()=>{if(e.belt&&t.band([[Z-.65*Ze.a,se-.05*y],[Z+.75*Ze.a,Y-.1*y]],e.belt,5.5*S,1.8*S),e.sash&&t.band([[Z-1.3*Ze.a,Y-.32*y],[Z+1.3*Ze.a,Y-.32*y]],e.sash,.13*y,1.8*S),!e.dress)for(let ae=0;ae<3;ae++){let C=se+.16*y+ae*.24*y;t.dot(Z+.8*Ze.a,C,3*S,st),t.dot(Z+.8*Ze.a,C,2.2*S,e.buttons??Ar(e.jacket,.7))}}),t.inkRing(ie,v,A),nt&&(t.band([bt,O],"#7a4b2a",5*S,1.5*S,"round"),t.band([ca(bt,O,.6),O],"#8d949c",2.4*S,1.2*S,"round")),t.stroke(Mr(Dt[0],Dt[1],Dt[2]),5.2*S,ee),t.dot(Dt[2][0],Dt[2][1],5.5*S);let qe=300+4*S;np(t,e,m,qe,de,h,A,v,!0);let Ie=Rs(qe,de,m);t.shadedFill(Ie,d,gi(d,qd),h,m.a),t.inkRing(Ie,v,A),ip(t,e,Ie,m,qe,de,h,u,1,!0);let Mt=!!e.hat&&e.hat!=="hair"&&e.hat!=="bonnet"&&e.hat!=="cap";_r.on=!!e.glasses,KS(t,qe,de,p,s,x,Mt,d,e.moustache,e.build==="stout"),_r.on=!1,t.rot=null};var JS=5.5,jS=1.6,$S=.55,eb=`
vec3 tintK = mix( vec3( 1.0 ), uCharTint, uTintK );
tintK /= pow( max( dot( tintK, vec3( 0.2126, 0.7152, 0.0722 ) ), 0.2 ), uNorm );             // same face value day and golden
vec3 outgoingLight = diffuseColor.rgb * tintK;
#if NUM_DIR_LIGHTS > 0
{
  vec3 sunV = directionalLights[ 0 ].direction;                                          // view space, towards the sun
  vec3 upV = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
  float side = sign( sunV.x ) * smoothstep( 0.0, 0.35, abs( sunV.x ) );                     // saturates: even a near-frontal sun shades one side                                          // + = sun on screen right
  float head = smoothstep( 0.565, 0.6, vMapUv.y );                                        // head zone vs body
  float hw = mix( 0.15, 0.2, head );
  float uu = clamp( ( vMapUv.x - 0.5 ) / hw, -1.0, 1.0 ) * sign( dFdx( vMapUv.x ) + 1e-7 ); // -1..1 screen left..right
  float t = uu * side;                                                                     // +1 = edge facing the sun
  float g = mix( uBodyGrad * uGradKB, min( uGrad * uGradK, 0.4 ), head );
  float dark = smoothstep( -0.15, 0.9, -t );                                                 // far side
  vec3 sideK = mix( vec3( 1.0 ), uSideTint, dark * clamp( g / max( min( uGrad * uGradK, 0.4 ), 1e-3 ), 0.0, 1.5 ) * 0.5 );
  float top = 1.0 + 0.05 * clamp( ( vMapUv.y - 0.69 ) / 0.11, -1.0, 1.0 ) * clamp( dot( sunV, upV ) * 2.0, 0.0, 1.0 ) * head;
  float lift = 1.0 + 0.04 * smoothstep( 0.0, 0.9, t );
  outgoingLight *= mix( uCharShade, 1.0, sunVis ) * ( 1.0 - g * dark ) * sideK * top * lift * uGain;
  #ifdef USE_MAP
  {
    // INNER warm rim, golden only: the outermost ~2 px (at 1080 wide) of the HEAD skin / TORSO silhouette on the
    // sun-facing edge. No offset copy: we only test whether the next pixels toward the sun are outside the card.
    // Hats, legs, rifles and other thin parts are skipped (inner sample must be skin, or torso at least ~40 units thick).
    float warm = smoothstep( 0.2, 0.4, 1.0 - uCharTint.b );
    float sl = length( sunV.xy );
    vec2 d2 = sunV.xy / max( sl, 1e-4 );
    vec2 duv = 2.0 * uPx * ( d2.x * dFdx( vMapUv ) + d2.y * dFdy( vMapUv ) );
    float edge = step( texture2D( map, vMapUv + duv ).a, 0.5 );
    vec2 dirU = normalize( duv + vec2( 1e-9 ) );
    vec4 c1 = texture2D( map, vMapUv - dirU * vec2( 0.027, 0.016 ) );   // ~16 design units inward (past the ink line)
    vec4 c2 = texture2D( map, vMapUv - dirU * vec2( 0.067, 0.04 ) );    // ~40 units inward: thick parts only
    float skin = step( 0.5, c1.a ) * step( 0.3, c1.r ) * step( c1.b + 0.12, c1.r ) * step( c1.g, c1.r + 0.02 );
    float torso = step( 0.27, vMapUv.y ) * step( vMapUv.y, 0.57 ) * step( 0.5, c1.a ) * step( 0.5, c2.a ) * step( 0.04, max( c1.r, max( c1.g, c1.b ) ) );
    float rim = warm * smoothstep( 0.1, 0.4, sl ) * edge * max( skin * head, torso ) * mix( 0.6, 1.0, sunVis );
    outgoingLight += vec3( 0.95, 0.52, 0.16 ) * rim;
  }
  #endif
}
#endif
`,tb=`#include <common>
uniform vec3 uCharTint; uniform float uCharShade; uniform float uGrad; uniform float uBodyGrad; uniform vec3 uSideTint; uniform float uGradK; uniform float uGradKB; uniform float uTintK; uniform float uNorm; uniform float uGain; uniform float uPx;`,nb={uGradK:{value:JS},uGradKB:{value:jS},uTintK:{value:$S},uNorm:{value:.7},uGain:{value:1.03},uPx:{value:.5}};function op(t){return t.emissive.set(0),t.emissiveIntensity=0,t.emissiveMap=null,t.onBeforeCompile=e=>{Object.assign(e.uniforms,sa,nb),e.fragmentShader=e.fragmentShader.replace("#include <common>",tb).replace("#include <lights_fragment_begin>",`float sunVis = 1.0;
`+Oo).replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",eb)},t.customProgramCacheKey=()=>"card9",t}var nh=.00216,ib=(()=>{let t=new Dn(600*nh,1e3*nh);return t.translate(0,475*nh,0),t})(),lp=new Dn(1,1),Ko=(()=>{let t=document.createElement("canvas");return t.width=t.height=2,new Qi(t)})(),ih=(t,e)=>{let n=document.createElement("canvas");n.width=t,n.height=e;let i=new Qi(n);return i.colorSpace=et,i.anisotropy=8,{cv:n,tex:i,key:""}},sb=(()=>{let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,4,64,64,62);return n.addColorStop(0,"rgba(20,10,30,0.55)"),n.addColorStop(.6,"rgba(20,10,30,0.35)"),n.addColorStop(1,"rgba(20,10,30,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),new Qi(t)})(),cp=t=>{let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0)/4294967296},up=(t,e)=>{let n=cp(t)*1.5,i=0;for(;n<e&&i<500;){let s=n+.5+1.8*cp(t+i);if(e>=n&&e<n+4/30)return!0;n=s,i++}return e>=n&&e<n+4/30},Qo=class{root=new rt;cards=[];fx=[];K=.72;constructor(){this.root.name="cast"}card(e){for(;this.cards.length<=e;){let n=op(new xs({map:Ko,alphaTest:.5,side:Gt})),i=new Yr({depthPacking:cu,map:Ko,alphaTest:.5,side:Gt}),s=new Le(ib,n);s.customDepthMaterial=i,s.castShadow=!0,s.receiveShadow=!0,s.renderOrder=1,s.layers.set(rn),s.rotation.order="YXZ",this.root.add(s);let r=new Le(lp,new Sn({map:sb,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));r.rotation.x=-Math.PI/2,r.layers.set(rn),r.renderOrder=.5,this.root.add(r),this.cards.push({mesh:s,mat:n,dmat:i,e:ih(Math.round(600*this.K),Math.round(1e3*this.K)),blob:r})}return this.cards[e]}fxCard(e){for(;this.fx.length<=e;){let n=new Sn({map:Ko,transparent:!0,depthWrite:!1,side:Gt,toneMapped:!0}),i=new xs({map:Ko,alphaTest:.5,side:Gt}),s=new Le(lp,n);s.layers.set(rn),s.renderOrder=3,this.root.add(s),this.fx.push({mesh:s,mat:n,lmat:i,e:ih(16,16)})}return this.fx[e]}update(e,n,i,s,r){let a=new B;s.getWorldPosition(a),n.forEach((o,l)=>{let c=this.card(l),h=o.scale??1,u=o.y??0,f=o.view??"front",d=JSON.stringify([o.o,f,o.mode,o.phase!==void 0?Math.round(o.phase*48)/48:0,o.expr,o.prop,o.look,o.tilt,o.headTilt,o.wave,o.facing,o.stride,up(o.id,e),o.seed]);if(c.e.key!==d){let g=c.e.cv.getContext("2d");g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,c.e.cv.width,c.e.cv.height),g.setTransform(this.K,0,0,this.K,0,0);let x=new Yo(g),m=up(o.id,e);f==="side"?ap(x,o.o,{phase:o.phase??0,expr:o.expr??"neutral",mode:o.mode??"stand",blink:m,stride:o.stride??1,seed:o.seed??3}):rp(x,o.o,{phase:o.phase??0,expr:o.expr??"neutral",mode:o.mode??"stand",blink:m,prop:o.prop??null,look:o.look??0,tilt:o.tilt??0,headTilt:o.headTilt??0,wave:o.wave,facing:o.facing??0,seed:o.seed??3,lift:60}),c.e.tex.needsUpdate=!0,c.e.key=d}c.mat.map=c.e.tex,c.dmat.map=c.e.tex,c.mesh.visible=!0,c.mesh.position.set(o.x,u+(o.hop??0),o.z),c.mesh.rotation.y=Math.atan2(a.x-o.x,a.z-o.z),c.mesh.scale.set((o.flip?-1:1)*h,h,h),c.blob.visible=o.shadow!==!1,c.blob.position.set(o.x,u+.012,o.z),c.blob.scale.set(.9*h,.55*h,1)});for(let o=n.length;o<this.cards.length;o++)this.cards[o].mesh.visible=!1,this.cards[o].blob.visible=!1;i.forEach((o,l)=>{let c=this.fxCard(l);if(c.e.key!==o.key){(c.e.cv.width!==o.cw||c.e.cv.height!==o.ch)&&(c.e=ih(o.cw,o.ch));let u=c.e.cv.getContext("2d");u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,o.cw,o.ch),o.draw(u),c.e.tex.needsUpdate=!0,c.e.key=o.key}let h=o.lit?c.lmat:c.mat;h.map=c.e.tex,c.mesh.material=h,c.mat.opacity=o.opacity??1,c.mesh.visible=(o.opacity??1)>.01,c.mesh.position.set(o.x,o.y,o.z),o.face!==!1?(c.mesh.quaternion.copy(s.quaternion),c.mesh.rotateZ(o.rot??0)):c.mesh.rotation.set(0,o.ry??0,o.rot??0),c.mesh.scale.set(o.w,o.h,1)});for(let o=i.length;o<this.fx.length;o++)this.fx[o].mesh.visible=!1}},Bt=(t,e={})=>{let n=e.w??1024,i=e.h??320;return{cw:n,ch:i,key:"txt"+t+JSON.stringify(e),draw:s=>{s.textAlign="center",s.textBaseline="middle",e.bg&&(s.fillStyle=e.bg,sh(s,20,20,n-40,i-40,40),s.fill(),s.lineWidth=14,s.strokeStyle=st,s.stroke());let r=e.size??i*.62;s.font=`900 ${r}px ${e.font??"Arial Black, Arial, sans-serif"}`;let a=s.measureText(t).width;a>n*.88&&(r*=n*.88/a,s.font=`900 ${r}px ${e.font??"Arial Black, Arial, sans-serif"}`);let o=e.sub?i*.42:i*.53;s.lineJoin="round",s.lineWidth=r*.2,s.strokeStyle=e.stroke??st,s.strokeText(t,n/2,o),s.fillStyle=e.fill??"#ffd84a",s.fillText(t,n/2,o),e.sub&&(s.font=`900 ${i*.2}px Arial Black, Arial`,s.lineWidth=i*.05,s.strokeText(e.sub,n/2,i*.8),s.fillStyle="#ffffff",s.fillText(e.sub,n/2,i*.8))}}},sh=(t,e,n,i,s,r)=>{t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()},Zo=(t="#ffffff")=>({cw:256,ch:256,key:"plane"+t,draw:e=>{e.translate(128,128),e.lineJoin="round",e.lineWidth=12,e.strokeStyle=st,e.fillStyle=t;let n=()=>{e.beginPath(),e.ellipse(0,0,100,18,0,0,7),e.moveTo(-15,-5),e.lineTo(25,-95),e.lineTo(52,-95),e.lineTo(35,0),e.lineTo(52,95),e.lineTo(25,95),e.lineTo(-15,5),e.moveTo(-85,-5),e.lineTo(-105,-48),e.lineTo(-82,-48),e.lineTo(-62,-5),e.moveTo(-85,5),e.lineTo(-105,48),e.lineTo(-82,48),e.lineTo(-62,5)};n(),e.stroke(),n(),e.fill(),e.fillStyle="#2f6fb5",e.fillRect(-60,-6,120,6)}}),hp=()=>({cw:256,ch:256,key:"coin",draw:t=>{t.beginPath(),t.arc(128,128,110,0,7),t.fillStyle="#c9ccd2",t.fill(),t.lineWidth=14,t.strokeStyle=st,t.stroke(),t.beginPath(),t.arc(128,128,82,0,7),t.lineWidth=6,t.strokeStyle="#8a8f9a",t.stroke(),t.fillStyle="#3b4150",t.font="900 90px Arial Black",t.textAlign="center",t.textBaseline="middle",t.fillText("25\xA2",128,132)}}),fa=(t="#fff3b0",e=12)=>({cw:512,ch:512,key:"burst"+t+e,draw:n=>{n.translate(256,256),n.fillStyle=t,n.strokeStyle=st,n.lineWidth=8;for(let i=0;i<e;i++){let s=i/e*Math.PI*2;n.beginPath(),n.moveTo(Math.cos(s-.08)*120,Math.sin(s-.08)*120),n.lineTo(Math.cos(s)*245,Math.sin(s)*245),n.lineTo(Math.cos(s+.08)*120,Math.sin(s+.08)*120),n.closePath(),n.fill(),n.stroke()}}}),da=(t="#ffd84a")=>({cw:128,ch:128,key:"spark"+t,draw:e=>{e.translate(64,64),e.fillStyle=t,e.strokeStyle=st,e.lineWidth=6,e.beginPath();for(let n=0;n<8;n++){let i=n/8*Math.PI*2,s=n%2?18:58;e.lineTo(Math.cos(i)*s,Math.sin(i)*s)}e.closePath(),e.stroke(),e.fill()}}),fp=(t,e)=>({cw:64,ch:64,key:"conf"+t+e,draw:n=>{n.fillStyle=t,n.strokeStyle=st,n.lineWidth=4,e%2?(n.fillRect(12,20,40,24),n.strokeRect(12,20,40,24)):(n.beginPath(),n.arc(32,32,18,0,7),n.fill(),n.stroke())}}),dp=()=>({cw:128,ch:128,key:"sweat",draw:t=>{t.fillStyle="#9fd4ff",t.strokeStyle=st,t.lineWidth=7,t.beginPath(),t.moveTo(64,10),t.quadraticCurveTo(110,80,64,112),t.quadraticCurveTo(18,80,64,10),t.fill(),t.stroke()}}),pp=(t=!0)=>({cw:512,ch:320,key:"elite"+t,draw:e=>{let n=e.createLinearGradient(0,0,512,320);n.addColorStop(0,"#fff1a8"),n.addColorStop(.5,"#e8b93a"),n.addColorStop(1,"#c98f1e"),sh(e,12,12,488,296,34),e.fillStyle=n,e.fill(),e.lineWidth=12,e.strokeStyle=st,e.stroke(),e.fillStyle="#1d1820",e.font="900 44px Arial Black",e.fillText("ELITE",40,90),e.font="700 28px Arial",e.fillText("LIFETIME MEMBER",40,135),e.fillStyle="#fff8",e.fillRect(40,190,80,58),e.fillStyle="#1d1820",e.font="700 30px Arial",e.fillText("D. PHILLIPS",150,265)}}),mp=()=>({cw:320,ch:560,key:"receipt",draw:t=>{t.fillStyle="#fbfaf4",t.beginPath(),t.moveTo(10,10);for(let n=10;n<=310;n+=20)t.lineTo(n+10,n/20%2?0:14);t.lineTo(310,550);for(let n=310;n>=10;n-=20)t.lineTo(n-10,n/20%2?560:546);t.closePath(),t.fill(),t.lineWidth=8,t.strokeStyle=st,t.stroke(),t.fillStyle="#3b4150",t.font="700 24px Courier New, monospace",t.textAlign="left",["PUDDING x 144","PUDDING x 144","PUDDING x 144","PUDDING x 144","  . . .","12,150 CUPS"].forEach((n,i)=>t.fillText(n,30,70+i*40)),t.fillRect(30,330,260,4),t.font="900 30px Courier New, monospace",t.fillText("TOTAL",30,390),t.fillStyle="#e2453c",t.font="900 44px Arial Black",t.fillText("$3,140",30,450),t.fillStyle="#3b4150";for(let n=0;n<22;n++)t.fillRect(40+n*11,480,n%3?4:7,50)}}),Jo=()=>({cw:256,ch:160,key:"barcode",draw:t=>{sh(t,6,6,244,148,18),t.fillStyle="#ffffff",t.fill(),t.lineWidth=8,t.strokeStyle=st,t.stroke(),t.fillStyle="#1d1820";let e=30,n=0;for(;e<224;){let i=[3,6,3,9,3,4][n++%6];t.fillRect(e,26,i,90),e+=i+[4,3,6,3][n%4]}t.font="700 22px Courier New",t.textAlign="center",t.fillText("0 70 4 99 12",128,140)}}),rh=()=>({cw:320,ch:360,key:"cupBig",draw:t=>{t.lineJoin="round",t.lineWidth=12,t.strokeStyle=st,t.beginPath(),t.moveTo(40,70),t.lineTo(280,70),t.lineTo(250,340),t.lineTo(70,340),t.closePath(),t.fillStyle="#f4efe6",t.fill(),t.stroke(),t.fillStyle="#e7dfd0",t.beginPath(),t.moveTo(210,80),t.lineTo(272,80),t.lineTo(246,330),t.lineTo(196,330),t.fill(),t.beginPath(),t.ellipse(160,70,128,34,0,0,7),t.fillStyle="#6b3a22",t.fill(),t.stroke(),t.fillStyle="#3f9a55",t.fillRect(64,150,192,70),t.strokeRect(64,150,192,70),t.fillStyle="#fff",t.font="900 34px Arial Black",t.textAlign="center",t.fillText("PUDDING",160,198),t.fillStyle="#ffffff",t.fillRect(100,250,120,60),t.lineWidth=6,t.strokeRect(100,250,120,60),t.fillStyle="#1d1820";for(let e=0;e<14;e++)t.fillRect(108+e*8,258,e%3?3:5,36)}});var rb=`In 0 .16|1999, .24 1.68|one 1.8 1.92|man 2 2.24|got 2.32 2.4|a 2.48 2.56|lifetime 2.72 3.28|of 3.36 3.44|free 3.56 3.68|flights... 3.76 4.8|by 4.88 4.96|buying 5.04 5.36|chocolate 5.44 5.76|pudding. 5.92 6.32
His 6.8 6.96|name 7.04 7.28|was 7.52 7.68|David 7.76 8.08|Phillips. 8.16 8.72|A 9.04 9.12|civil 9.2 9.44|engineer 9.52 9.92|from 10 10.16|Davis, 10.24 10.6|California. 10.64 11.36|And 11.76 11.84|engineers 11.92 12.64|read 12.96 13.2|the 13.24 13.28|fine 13.36 13.6|print. 13.68 14
One 14.48 14.64|day 14.72 14.8|at 14.84 14.88|the 14.96 15|grocery 15.04 15.44|store, 15.6 16|he 16.08 16.16|spotted 16.24 16.56|a 16.6 16.64|tiny 16.8 17.12|promo. 17.2 17.68|Send 18.08 18.32|in 18.44 18.56|ten 18.68 18.8|Healthy 18.96 19.12|Choice 19.2 19.44|barcodes, 19.52 20.24|get 20.32 20.48|five 20.72 20.96|hundred 21.12 21.44|airline 21.6 21.92|miles. 22 22.6|Send 22.8 22.96|them 23.04 23.12|in 23.16 23.2|early? 23.28 23.84|Double. 24.08 24.68
So 24.88 25.04|David 25.12 25.36|did 25.44 25.6|what 25.68 25.92|any 26.04 26.16|engineer 26.24 26.56|would 26.64 26.8|do. 26.92 27.12|He 27.44 27.6|walked 27.72 28|every 28.08 28.4|aisle, 28.48 28.96|hunting 29 29.36|for 29.44 29.52|the 29.56 29.6|cheapest 29.84 30.16|barcode 30.24 30.64|in 30.68 30.72|the 30.8 30.84|store. 30.88 31.28|Soup? 31.76 32.16|Too 32.56 32.64|pricey. 32.72 33.2|Cereal? 33.6 34.08|Nope. 34.48 34.88
Then 35.28 35.6|he 35.84 36.08|found 36.16 36.4|it. 36.48 36.64|Chocolate 37.12 37.52|pudding. 37.68 38.08|Twenty-five 38.48 39.04|cents 39.12 39.28|a 39.36 39.44|cup. 39.52 39.84|And 40.16 40.32|every 40.4 40.72|single 40.88 41.12|cup 41.2 41.44|had 41.52 41.68|its 41.8 41.92|own 42 42.16|barcode. 42.24 42.96|Twenty-five 43.12 43.6|cents 43.68 43.92|in. 44 44.24|One 44.64 44.8|hundred 44.88 45.12|miles 45.2 45.52|out. 45.64 45.84|So 46.16 46.24|he 46.32 46.48|bought 46.52 46.72|the 46.8 46.88|shelf. 47.04 47.52
Then 47.92 48.16|he 48.32 48.4|drove 48.48 48.64|to 48.72 48.8|the 48.84 48.88|next 48.96 49.12|store, 49.28 49.68|and 49.72 49.76|bought 49.84 50|that 50.08 50.24|shelf 50.32 50.56|too. 50.72 50.96|And 51.36 51.52|the 51.56 51.6|next 51.68 51.92|one. 52 52.24|And 52.64 52.96|the 53.12 53.2|next 53.36 53.6|one. 53.68 54.12|For 54.32 54.48|days, 54.64 55.16|he 55.2 55.36|cruised 55.44 55.84|up 55.92 56.08|and 56.16 56.24|down 56.36 56.48|Northern 56.56 56.8|California, 56.88 57.76|emptying 57.92 58.32|every 58.4 58.72|pudding 58.8 59.04|shelf 59.12 59.36|he 59.4 59.44|could 59.52 59.68|find. 59.84 60.08
When 60.48 60.64|the 60.68 60.72|shelves 60.8 61.04|ran 61.12 61.28|dry, 61.36 61.92|he 62 62.08|asked 62.16 62.28|a 62.32 62.4|store 62.52 62.64|manager 62.72 63.04|to 63.12 63.2|order 63.32 63.44|more. 63.52 63.84|Sixty 64.32 64.72|extra 64.88 65.2|cases. 65.28 65.84|In 66.16 66.24|the 66.28 66.32|end, 66.4 66.96|he 67.04 67.12|had 67.2 67.36|twelve 67.44 67.76|thousand, 67.92 68.56|one 68.64 68.72|hundred 68.8 69.04|and 69.16 69.28|fifty 69.36 69.6|cups 69.76 69.92|of 70 70.08|pudding. 70.16 70.68
Luckily, 70.88 71.6|that 71.72 71.84|meant 71.88 72.08|over 72.2 72.32|a 72.4 72.48|million 72.72 73.04|miles. 73.12 73.68|Unluckily, 74.16 75.04|it 75.12 75.2|also 75.36 75.52|meant 75.6 75.84|twelve 75.96 76.24|thousand 76.48 76.88|cups 77.04 77.2|of 77.28 77.36|pudding. 77.44 77.84|And 78.16 78.32|every 78.4 78.8|single 78.88 79.12|barcode 79.28 79.76|had 79.84 79.92|to 79.96 80|be 80.08 80.24|peeled 80.28 80.56|off 80.64 80.88|by 81 81.12|hand. 81.2 81.8
So 82 82.08|David 82.16 82.48|made 82.56 82.64|a 82.68 82.72|deal. 82.8 83.12|He 83.44 83.52|gave 83.56 83.84|all 83.92 84|the 84.08 84.16|pudding 84.24 84.56|to 84.6 84.64|food 84.72 84.88|banks. 84.96 85.52|The 85.68 85.76|volunteers 85.84 86.48|peeled 86.52 86.64|the 86.72 86.76|barcodes 86.8 87.28|for 87.36 87.44|him. 87.52 87.84|And 88 88.08|because 88.2 88.32|it 88.4 88.44|was 88.48 88.56|a 88.6 88.64|donation... 88.72 89.6|he 89.64 89.68|even 89.76 89.92|got 90 90.08|a 90.12 90.16|tax 90.32 90.48|write-off. 90.56 91.12
Total 91.28 91.52|cost? 91.6 92.16|About 92.32 92.56|three 92.64 92.8|thousand 92.96 93.2|dollars. 93.36 93.84|Total 94.16 94.4|reward? 94.48 95.04|One 95.44 95.6|point 95.76 95.92|two 96.16 96.24|five 96.48 96.64|million 97.04 97.36|miles. 97.44 98.08|Enough 98.24 98.56|for 98.64 98.72|thirty-one 98.88 99.36|round 99.52 99.68|trips 99.76 100|to 100.08 100.16|Europe. 100.24 100.64|Plus 100.88 101.28|lifetime 101.52 102|elite 102.16 102.32|status. 102.4 103.04
The 103.2 103.28|story 103.44 103.6|was 103.68 103.92|so 104.04 104.16|wild, 104.24 104.8|Hollywood 104.84 105.28|put 105.36 105.44|it 105.52 105.56|in 105.6 105.68|a 105.72 105.76|movie. 105.84 106.24|And 106.56 106.72|David? 106.92 107.2|Twenty 107.6 107.84|years 107.92 108.08|later, 108.16 108.64|he's 108.72 108.96|still 109.12 109.28|earning 109.36 109.6|miles 109.68 110|five 110.16 110.4|times 110.48 110.72|faster 110.8 111.12|than 111.2 111.28|he 111.36 111.44|can 111.52 111.6|spend 111.64 111.84|them. 111.92 112.24
The 112.4 112.48|company 112.56 112.88|behind 112.96 113.2|the 113.28 113.36|promo 113.44 113.76|was 113.88 114|called 114.12 114.24|Healthy 114.32 114.64|Choice. 114.72 115.2|And 115.44 115.52|for 115.6 115.68|David... 115.76 116.56|it 116.64 116.72|really 116.88 117.04|was. 117.24 117.76`,wr=rb.split(/[|\n]/).map(t=>{let e=t.trim().split(" ");return{t:e[0],s:+e[1],e:+e[2]}}),gp=t=>t.toLowerCase().replace(/[^a-z0-9'-]/g,""),vp=(t,e=1)=>{let n=0;t=gp(t);for(let i of wr)if(gp(i.t)===t&&++n===e)return i.s;throw new Error("word "+t+e)};var jn=30,ss=119.2,oh=Math.round(ss*jn),te=(t,e,n)=>new B(t,e,n),is=(t,e=0,n=1)=>Math.max(e,Math.min(n,t)),xi=t=>(t=is(t),t*t*t*(t*(6*t-15)+10)),Qe=(t,e,n)=>xi((n-t)/(e-t)),Ve=(t,e,n)=>t+(e-t)*n,$t=(t,e,n)=>t.clone().lerp(e,n),ot=(t,e)=>{let n=(t-e)*30;if(n<0)return 0;if(n>10)return 1;let i=n/10;return Math.sin(i*Math.PI*.75)/Math.sin(Math.PI*.75)*(1+.25*Math.sin(i*Math.PI))},vi=(t,e,n=.25)=>is((e-t)/n),vn=(t,e,n,i=.06)=>t.clone().lerp(e,i*n),Jn=(t,e=.8)=>t/(2*e),He=(t,e,n,i,s,r,a={})=>({...t,x:e,y:n,z:i,w:s,h:r,...a}),yp={jacket:"#4f86cc",plaid:"#2f5fa0",collar:"#f1eee6",pants:"#c9b48a",boots:"#5a3b2a",hat:"hair",hair:"#5a3b2a",glasses:!0},ab={...yp,hair:"#d3d6dc",jacket:"#8a3b4a",plaid:"#7a2f3e"},xp={jacket:"#e2453c",collar:"#ffffff",pants:"#3b3f52",boots:"#26222a",hat:"hair",hair:"#2a201a",skin:"#c99067",dress:"#e2453c"},ob={jacket:"#3f9a55",collar:"#ffffff",pants:"#3b4150",boots:"#26222a",hat:"cap",cap:"#3f9a55",build:"stout",moustache:"#4a3426",skin:"#f5c9a0"},ah=t=>({jacket:"#f07a2c",pants:["#3b5b9a","#3b3f52","#5d7a3a"][t%3],boots:"#4a3426",hat:t===1?"cap":"hair",cap:"#2f6fb5",hair:["#2a201a","#c98a3a","#5a3b2a","#1d1820"][t%4],skin:["#ffe2c2","#c99067","#f5c9a0","#ecd0b6"][t%4],dress:t===2?"#f07a2c":void 0}),Ni=t=>({jacket:["#8a5ac9","#f2b134","#2fb5a8","#d8406f"][t%4],pants:"#3b3f52",boots:"#4a3426",hat:"hair",hair:["#2a201a","#c98a3a","#5a3b2a"][t%3],skin:["#f5c9a0","#c99067","#ffe2c2"][t%3],dress:t%2?["#5a8fc2","#c25a7a"][t%2]:void 0}),lb=t=>({jacket:["#26222a","#8a3b4a","#3b4150","#2f5f6a"][t%4],pants:"#26222a",boots:"#1d1820",hat:"hair",hair:["#2a201a","#e8c45a","#5a3b2a"][t%3],skin:["#ffe2c2","#c99067","#ecd0b6"][t%3],dress:t%3===1?"#c9306e":void 0}),qt=(t,e,n={})=>({id:"david",o:yp,x:t,z:e,seed:5,...n}),cb=(t,e,n,i,s,r=18,a=2.2)=>{let o=[],l=t-e;if(l<0)return o;let c=["#e2453c","#ffd84a","#3f9a55","#2f6fb5","#f07a2c","#ffffff"];for(let h=0;h<r;h++){let u=h*2.39996,f=a*(.4+h*37%10/16),d=3.2+h%5*.5,g=n+Math.cos(u)*f*Math.min(1,l*1.6),x=i+d*l-2.6*l*l,m=s+Math.sin(u)*f*.4*Math.min(1,l*1.6);x<0||o.push(He(fp(c[h%6],h),g,x,m,.16,.16,{rot:l*(3+h%4)}))}return o},he=vp,pa=[{id:"hook",t0:0,t1:6.6,set:"airport",light:"golden",sun:[-80,9],shadowR:22,cam:({t,u:e})=>({pos:$t(te(2.6,1.25,1.6),te(1.7,1.3,-.2),xi(e)),look:$t(te(.2,2.1,-6),te(.4,1.85,-4),xi(e)),fov:44}),actors:({t})=>[qt(.3,-3.4,{prop:t>he("chocolate")-.1?"pudding":null,expr:t>he("chocolate")?"smile_closed":"smile",look:-.3,facing:1}),{id:"trav1",o:Ni(0),x:-5.5,z:1.5,y:0,mode:"sit",seed:7,expr:"neutral"},{id:"trav2",o:Ni(1),x:-4.2,z:1.5,mode:"sit",seed:9}],fx:({t})=>{let e=ot(t,he("pudding")-.1);return e>0?[He(da(),.85,2.05,-3.1,.35*e,.35*e,{rot:t*2}),He(da("#ffffff"),-.1,2.3,-3.1,.22*e,.22*e,{rot:-t*2})]:[]},pose:({t,refs:e})=>{e.plane.position.set(8-Math.max(0,t-3.6)*1.2,0,-30),e.plane.rotation.set(0,-.45,0)},dof:6,focus:()=>te(.3,1.6,-3.4)},{id:"davis",t0:6.6,t1:11.65,set:"davis",light:"day",sun:[125,50],shadowR:20,cam:({u:t})=>({pos:vn(te(6.5,1.5,5.2),te(0,1.6,2),t,.18),look:te(-.5,1.65,1.4),fov:42}),actors:({t})=>{let e=Qe(6.6,8.3,t),n=Ve(-9,-.6,e);return[qt(n,2.4,{view:e<1?"side":"front",mode:e<1?"march":"stand",phase:Jn(n+9),expr:t>he("Phillips")?"grin":"smile",wave:t>he("Phillips")&&t<10.3?Math.sin(t*12)*.5+.5:void 0}),{id:"biker",o:Ni(2),x:Ve(18,-20,Qe(6.6,11.6,t)),z:-.9,view:"side",flip:!0,mode:"march",phase:Jn(18-Ve(18,-20,Qe(6.6,11.6,t))),seed:11},{id:"walker",o:Ni(3),x:Ve(-3,4,Qe(6.6,11.6,t)),z:-5.6,view:"side",mode:"march",phase:Jn(Ve(-3,4,Qe(6.6,11.6,t))+3),seed:13}]},pose:({t,refs:e})=>{let n=Qe(6.6,8.3,t);e.bike.position.set(Ve(-9,-3.4,n)+.6,0,2.4)},fx:({t})=>{let e=ot(t,he("civil"));return e?[He(Bt("CIVIL ENGINEER",{fill:"#ffffff",bg:"#2f6fb5",h:220}),.4,2.55,3,1.3*e,.28*e,{opacity:vi(t,11.5)})]:[]},dof:4,focus:()=>te(-.6,1.6,2.4)},{id:"fineprint",t0:11.65,t1:14.4,set:"davis",light:"day",sun:[125,50],shadowR:10,cam:({u:t})=>({pos:vn(te(1.4,1.55,5.6),te(-.6,1.5,2.4),t,.2),look:te(-.5,1.45,2.4),fov:32,roll:2}),actors:({t})=>[qt(-.6,2.4,{prop:"clipboard",expr:t>he("fine")?"stern":"neutral",look:.6,headTilt:-5,facing:1})],fx:({t})=>{let e=ot(t,he("fine")-.1);return e?[He(Bt("fine print",{fill:"#ffffff",h:200}),.25,1.75,2.9,.75*e,.15*e,{rot:.08})]:[]},dof:13,focus:()=>te(-.6,1.7,2.4)},{id:"storeIn",t0:14.4,t1:18,set:"store",light:"indoor",sun:[100,72],shadowR:18,cam:({u:t})=>({pos:$t(te(-4.6,1.75,-.9),te(-4,1.65,.1),xi(t)),look:$t(te(-1.2,1.4,6),te(-1.5,1.4,3),xi(t)),fov:50}),actors:({t})=>{let e=Qe(14.4,16.4,t),n=Ve(8.5,2.6,e);return[qt(-1.6,n,{mode:e<1?"stroll":"stand",phase:Jn(8.5-n),expr:t>he("spotted")?"shock":"smile",look:t>he("spotted")?-.5:0}),{id:"shopA",o:Ni(0),x:-6,z:4.6,mode:"stand",seed:21,look:.4},{id:"cashA",o:xp,x:-6.6,z:7,mode:"stand",seed:23}]},pose:({refs:t})=>{t.cart.visible=!1,t.cartPile.visible=!1,t.puddingShelf.face.material=t.full},fx:({t})=>{let e=ot(t,he("tiny"));return e?[He(fa("#fff3b0",14),-2.2,2.3,.62,1.5*e,1.5*e,{face:!1,opacity:.85*vi(t,18)})]:[]},dof:0},{id:"promo",t0:18,t1:24.85,set:"store",light:"indoor",sun:[100,72],shadowR:10,cam:({t,u:e})=>{let n=Qe(18,19,t);return{pos:$t(te(-1.15,2,3.4),te(-1.65,2.25,2.45),n).lerp(te(-2.2,2.3,.6),.04*e),look:$t(te(-2.1,2,.6),te(-2.2,2.3,.6),n),fov:Ve(40,34,n)+(t>he("Double")?-4*Qe(he("Double"),he("Double")+.3,t):0)}},actors:({t})=>[qt(-1,3.1,{expr:t>he("Double")?"laugh":t>he("early?")?"shock":"neutral",look:-.4,facing:-1})],fx:({t})=>{let e=[],n=te(-2.2,2.3,.75),i=ot(t,he("barcodes,"));i&&e.push(He(Jo(),n.x-.55,n.y+.35,n.z+.2,.42*i,.26*i,{opacity:vi(t,he("Send",2))}));let s=ot(t,he("airline"));s&&e.push(He(Zo(),n.x+.55,n.y+.45,n.z+.2,.45*s,.45*s,{rot:.3,opacity:vi(t,he("Send",2))}));let r=ot(t,he("Double")-.05);return r&&(e.push(He(fa("#ffd84a",16),n.x,n.y,n.z+.12,1.6*r,1.6*r,{rot:t*.6})),e.push(He(Bt("x2",{fill:"#e2453c",h:360,w:512}),n.x,n.y+.02,n.z+.25,.8*r,.56*r))),e},dof:10,focus:()=>te(-2.2,2.3,.6),pose:({refs:t})=>{t.cart.visible=!1}},{id:"aisle",t0:24.85,t1:31.4,set:"store",light:"indoor",sun:[100,72],shadowR:16,cam:({t})=>{let e=Ve(.4,-8.4,Qe(25.3,31.4,t));return{pos:te(-4.75,1.45,e-3.4),look:te(-4.2,1.45,e+.5),fov:50}},actors:({t})=>{let e=Ve(.4,-8.4,Qe(25.3,31.4,t));return[qt(-4.25,e,{mode:"stroll",phase:Jn(.4-e),look:t>he("hunting")?Math.sin(t*2.2):0,expr:t>he("hunting")?"stern":"smile"}),{id:"shopB",o:Ni(1),x:-3.7,z:3.6,mode:"stand",seed:31,look:.3}]},pose:({t,refs:e})=>{let n=Ve(.4,-8.4,Qe(25.3,31.4,t));e.cart.visible=!1,e.cart.rotation.y=0},fx:({t})=>{let e=ot(t,he("cheapest"));return e?[He(Bt("CHEAPEST BARCODE?",{fill:"#ffd84a",h:200}),-4.3,2.55,Ve(.4,-8.4,Qe(25.3,31.4,t))-.4,1.4*e,.27*e,{opacity:vi(t,31.3)})]:[]},dof:0},{id:"soup",t0:31.4,t1:35.25,set:"store",light:"indoor",sun:[100,72],shadowR:8,cam:({t})=>t>he("Cereal?")-.12?{pos:vn(te(-5.4,1.5,-10.8),te(-4.95,1.5,-7.6),Qe(33.5,35.3,t),.1),look:te(-4.95,1.45,-7.6),fov:42,roll:-3}:{pos:vn(te(-3.4,1.5,-10.8),te(-3.85,1.5,-7.6),Qe(31.4,33.5,t),.1),look:te(-3.85,1.45,-7.6),fov:42,roll:3},actors:({t})=>{let e=t>he("Cereal?")-.12;return[qt(e?-4.95:-3.85,-7.6,{expr:t>he("Nope.")?"stern":t>he("Too")?"nervous":"neutral",headTilt:t>he("Nope.")?Math.sin(t*22)*6:0,facing:e?1:-1,look:e?.6:-.6})]},fx:({t})=>{let e=[],n=ot(t,he("Soup?"));n&&t<he("Cereal?")-.12&&e.push(He(Bt("$1.89",{fill:"#ffffff",bg:"#e2453c",h:260,w:640}),-5.25,1.9,-8.6,.65*n,.27*n));let i=ot(t,he("Cereal?"));return i&&e.push(He(Bt("$3.49",{fill:"#ffffff",bg:"#e2453c",h:260,w:640}),-3.55,1.95,-8.6,.65*i,.27*i)),e},dof:12,focus:({t})=>t>he("Cereal?")?te(-4.95,1.6,-7.6):te(-3.85,1.6,-7.6)},{id:"found",t0:35.25,t1:43.1,set:"store",light:"indoor",sun:[100,72],shadowR:12,cam:({t})=>{let e=Qe(35.3,37.3,t);return t>40.1?{pos:vn(te(4.25,1.25,-5.5),te(3.35,1.1,-6.15),Qe(40.1,43.1,t),.2),look:te(3.3,1.1,-6.2),fov:30}:{pos:$t(te(4.9,1.65,1.8),te(6,1.65,-2.6),e),look:$t(te(4.3,1.6,-7),te(3.6,1.4,-6.6),e),fov:42}},actors:({t})=>{let e=Qe(35.3,37,t),n=Ve(-1.2,-5.4,e);return t>40.1?[]:[qt(4.4,n,{mode:e<1?"stroll":"stand",phase:Jn(n+1.2),expr:t>he("found")?t>he("Twenty-five")?"grin":"shock":"neutral",facing:-1,look:-.7})]},pose:({refs:t})=>{t.cart.visible=!1,t.puddingShelf.face.material=t.full},fx:({t})=>{let e=[];if(t>he("found")&&t<40.1)for(let i=0;i<5;i++){let s=ot(t,he("found")+i*.12);e.push(He(da(i%2?"#ffffff":"#ffd84a"),3.3,.9+i*.3,-6.2-i*.45,.25*s*(1+.2*Math.sin(t*8+i)),.25*s*(1+.2*Math.sin(t*8+i)),{rot:t*(i%2?2:-2)}))}let n=ot(t,he("Twenty-five"));if(n&&t<40.1&&e.push(He(Bt("25\xA2",{fill:"#ffffff",bg:"#e2453c",h:300,w:520}),3.2,1.9,-5.8,.6*n,.35*n)),t>40.1){let i=ot(t,40.1);e.push(He(rh(),3.38,1.1,-6.15,.36*i,.4*i));let s=ot(t,he("barcode",2));s&&e.push(He(fa("#ffd84a",12),3.36,.96,-6.18,.4*s,.4*s,{rot:t}))}return e},dof:({t})=>t>40.1?15:6,focus:({t})=>t>40.1?te(3.38,1.1,-6.15):te(4.4,1.6,-5.4)},{id:"math",t0:43.1,t1:46.15,set:"store",light:"indoor",sun:[100,72],shadowR:8,cam:({u:t})=>({pos:vn(te(4.35,1.5,-4.6),te(3,1.45,-6.3),t,.15),look:te(3,1.55,-6.3),fov:36}),fx:({t})=>{let e=[],n=te(3.25,1.2,-6.05);e.push(He(rh(),n.x,n.y,n.z,.34,.38));let i=is((t-43.15)/.75);t<44&&e.push(He(hp(),n.x,Ve(2.1,n.y+.25,i*i),n.z,.22,.22,{rot:0}));let s=ot(t,43.2);t<44.5&&e.push(He(Bt("25\xA2 IN",{fill:"#ffffff",h:220,w:640}),n.x-.3,n.y+.5,n.z,.5*s,.17*s));let r=is((t-he("One",3))/1);if(t>he("One",3)){e.push(He(Zo(),n.x+r*1.2,n.y+.3+r*.9,n.z+r*.3,.5,.5,{rot:.5}));let a=ot(t,he("miles",2));e.push(He(Bt("100 MILES OUT",{fill:"#ffd84a",h:220,w:900}),n.x+.05,n.y+.42,n.z,.8*a,.2*a))}return e},dof:16,focus:()=>te(3.25,1.2,-6.05)},{id:"bought",t0:46.15,t1:47.95,set:"store",light:"indoor",sun:[100,72],shadowR:12,cam:({u:t})=>({pos:vn(te(6.1,1.4,-1.6),te(3.6,1.8,-6.5),t,.1),look:te(3.4,1.7,-6.6),fov:44,roll:-4}),actors:()=>[qt(4.3,-4.6,{expr:"grin",wave:.7,facing:1}),{id:"shopC",o:Ni(2),x:5,z:-9.5,mode:"stand",expr:"shock",seed:41,facing:-1}],pose:({refs:t})=>{t.cart.visible=!0,t.cart.position.set(4,0,-6),t.cart.rotation.y=.2,t.cartPile.visible=!0,t.puddingShelf.face.material=t.empty},fx:({t})=>{let e=ot(t,he("shelf."));return e?[He(Bt("SOLD OUT",{fill:"#ffffff",bg:"#e2453c",h:260,w:900}),3.05,1.45,-8.6,1.3*e,.37*e,{rot:-.1})]:[]},dof:0},{id:"drive1",t0:47.95,t1:51.3,set:"valley",light:"day",sun:[60,46],shadowR:30,cam:({u:t})=>({pos:vn(te(-10,1.9,9.5),te(-2,2,-4),t,.08),look:$t(te(-8,1.3,1),te(-.8,2.2,-10),xi(t)),fov:46}),pose:({t,refs:e})=>{let n=Ve(-18,-2.5,Qe(47.95,49.6,t));e.car.position.set(n,0,3.2),e.car.rotation.y=0,e.car.userData.wheels.forEach(i=>i.rotation.y=n*2.6),e.car.userData.cases.forEach((i,s)=>i.visible=s<2)},actors:({t})=>{let e=[];if(t>49.9){let n=Qe(49.9,51.3,t),i=Ve(2,-14.5,n);e.push(qt(-.8,i,{mode:"stroll",phase:Jn(2-i),expr:"grin",scale:1}))}return e.push({id:"shopD",o:Ni(3),x:8,z:-16,mode:"stand",seed:51}),e},fx:({t})=>{let e=ot(t,he("store",3));return e?[He(Bt("STORE #2",{fill:"#ffffff",bg:"#3f9a55",h:240,w:700}),0,9.8,-19.3,5.4*e,1.85*e,{opacity:vi(t,51.25)})]:[]},dof:0},{id:"store3",t0:51.3,t1:52.55,set:"valley",light:"day",sun:[60,46],shadowR:18,cam:({u:t})=>({pos:vn(te(40.6,1.45,-9.2),te(37.8,1.7,-14.5),t,.12),look:te(37.4,1.85,-14.8),fov:44,roll:4}),actors:({t})=>{let e=Ve(-17.2,-12.6,Qe(51.3,52.6,t));return[qt(37.6,e,{mode:"stroll",phase:Jn(e+17.2),expr:"laugh",prop:"box"}),{id:"cash2",o:xp,x:34,z:-18.6,mode:"stand",expr:"shock",seed:61,wave:.8}]},fx:({t})=>{let e=ot(t,51.4);return[He(Bt("STORE #3",{fill:"#ffffff",bg:"#2f6fb5",h:240,w:700}),38,9.6,-19.3,4.4*e,1.5*e)]},dof:6,focus:({t})=>te(37.6,1.6,Ve(-17.2,-12.6,Qe(51.3,52.6,t)))},{id:"store4",t0:52.55,t1:54.3,set:"valley",light:"day",sun:[60,46],shadowR:18,cam:({u:t})=>({pos:vn(te(-35.4,1.4,-9.8),te(-38.4,1.8,-14.8),t,.12),look:te(-38.2,1.95,-15.2),fov:44,roll:-4}),actors:({t})=>{let e=Ve(-17,-13.4,Qe(52.55,54.3,t));return[qt(-38.4,e,{mode:"stroll",phase:Jn(e+17),expr:"grin",prop:"box",tilt:Math.sin(t*9)*3}),{id:"shopE",o:Ni(0),x:-34.8,z:-18.4,mode:"stand",expr:"shock",seed:71,facing:1}]},fx:({t})=>{let e=ot(t,52.65);return[He(Bt("STORE #4",{fill:"#ffffff",bg:"#e2453c",h:240,w:700}),-38,9.6,-19.3,4.4*e,1.5*e)]},dof:6,focus:({t})=>te(-38.4,1.6,Ve(-17,-13.4,Qe(52.55,54.3,t)))},{id:"highway",t0:54.3,t1:60.45,set:"valley",light:"golden",sun:[-160,10],shadowR:30,fog:[60,420],cam:({t})=>{let e=Ve(-120,-40,(t-54.3)/6.15),n=Qe(57,60.4,t);return{pos:te(e+Ve(6,14,n),Ve(1.6,9,n),Ve(20.5,30,n)),look:te(e-1.5,Ve(1.4,1,n),14),fov:40}},pose:({t,refs:e})=>{let n=Ve(-120,-40,(t-54.3)/6.15);e.car.position.set(n,0,12),e.car.rotation.y=0,e.car.userData.wheels.forEach(s=>s.rotation.y=n*2.6);let i=Math.min(6,2+Math.floor((t-54.3)/1.2));e.car.userData.cases.forEach((s,r)=>s.visible=r<i)},fx:({t})=>{let e=[],n=ot(t,he("California",2));return n&&e.push(He(Bt("NORTHERN CALIFORNIA",{fill:"#ffffff",h:200,w:1300}),Ve(-120,-40,(t-54.3)/6.15)+.6,Ve(3,6,Qe(57,60.4,t)),16.5,3.4*n,.52*n,{opacity:vi(t,60.4)})),e},dof:0},{id:"dock",t0:60.45,t1:66.15,set:"dock",light:"day",sun:[40,48],shadowR:22,cam:({t,u:e})=>{let n=Qe(63.9,65,t);return{pos:$t(vn(te(4.2,2.65,8.6),te(.5,2.5,3.2),e,.12),te(9,4.8,12.5),n),look:$t(te(.4,2.45,3),te(0,1.9,1.8),n),fov:Ve(38,54,n)}},actors:({t})=>[qt(1.6,3.2,{y:1.2,expr:t>he("order")?"grin":"smile",look:-.6,facing:-1}),{id:"mgr",o:ob,x:-.6,z:3.3,y:1.2,mode:"stand",prop:"clipboard",expr:t>he("Sixty")?"shock":"nervous",seed:81,facing:1,look:.5}],pose:({t,refs:e})=>{let n=Math.round(Ve(0,60,Qe(he("Sixty")-.2,65.8,t)));e.cases.forEach((i,s)=>i.visible=s<n),e.truck.position.set(-8,0,Ve(11.5,9,Qe(60.5,62.5,t)))},fx:({t})=>{let e=ot(t,he("Sixty"));return e?[He(Bt("+60 CASES",{fill:"#ffd84a",h:240,w:900}),1.5,4.2,5.5,2.8*e,.75*e)]:[]},dof:({t})=>t>64?0:8,focus:()=>te(.5,2.8,3.2)},{id:"home",t0:66.15,t1:70.85,set:"home",light:"indoor",sun:[-120,55],shadowR:9,cam:({t})=>{let e=Qe(66.15,70.8,t);return{pos:$t(te(1,2,4.6),te(2.2,3.4,4.4),e),look:$t(te(.6,2.3,-.4),te(.5,1.9,-.8),e),fov:Ve(42,50,e)}},actors:({t})=>[qt(.6,-.2,{y:1.55,expr:"shock",look:0,prop:"pudding",tilt:0,shadow:!1})],fx:({t})=>{let e=[];if(t>he("twelve")){let n=Math.round(Ve(0,12150,Qe(he("twelve"),he("pudding",4),t))),i=ot(t,he("twelve"));e.push(He(Bt(n.toLocaleString("en-US"),{fill:"#ffd84a",h:300,w:900,sub:"CUPS OF PUDDING"}),.6,4.1,-.6,2.4*i,.8*i))}return e},dof:0},{id:"lucky",t0:70.85,t1:74.1,set:"home",light:"indoor",sun:[-120,55],shadowR:9,cam:({u:t})=>({pos:vn(te(1.6,1.4,3.8),te(.6,3,-.3),t,.12),look:te(.6,2.75,-.3),fov:42,roll:4}),actors:({t})=>[qt(.6,-.2,{y:1.55,expr:"laugh",prop:"cheer",hop:Math.abs(Math.sin((t-70.85)*7))*.18,shadow:!1})],fx:({t})=>{let e=[...cb(t,71,.6,3.4,-.2,22,2.2)],n=ot(t,he("million"));n&&e.push(He(Bt("1,000,000+ MILES",{fill:"#ffd84a",h:240,w:1100}),.6,4.35,-.4,2.6*n,.57*n));for(let i=0;i<3;i++){let s=is((t-71.2-i*.5)/1.6);s>0&&e.push(He(Zo(),Ve(-2.5,3.5,s),3.4+i*.35+Math.sin(s*5)*.15,-.8,.45,.45,{rot:.2}))}return e},dof:6,focus:()=>te(.6,2.7,-.3)},{id:"unlucky",t0:74.1,t1:82,set:"home",light:"indoor",sun:[-120,55],shadowR:8,cam:({t})=>t>he("peeled")-.1?{pos:vn(te(-3.7,1.45,3.9),te(-3.85,1.35,2.4),Qe(80.2,82,t),.2),look:te(-3.85,1.3,2.3),fov:26}:{pos:vn(te(-5,1.55,6.2),te(-3.9,1.35,2.2),Qe(74.1,80.2,t),.22),look:te(-3.85,1.3,2.1),fov:38,roll:-2},actors:({t})=>[qt(-3.9,1.85,{expr:t>he("barcode",3)?"dazed":"pained",prop:"peel",headTilt:-6,look:.3})],fx:({t})=>{let e=[],n=ot(t,he("Unluckily,"));if(n&&t<he("peeled")-.1&&e.push(He(Bt("12,000 STICKERS",{fill:"#ffffff",bg:"#3b4150",h:230,w:1e3}),-3.9,2.2,2.4,1.15*n,.27*n,{opacity:vi(t,he("peeled")-.1)})),t>77&&e.push(He(dp(),-3.55,1.95+Math.sin(t*5)*.02,1.95,.12,.12)),t>he("peeled")-.1){let i=is((t-he("peeled"))/1.2);e.push(He(Jo(),-3.7+i*.1,1.2+i*.12,2.5,.22,.14,{rot:-i*.9}))}return e},dof:({t})=>t>he("peeled")-.1?14:7,focus:()=>te(-3.9,1.5,1.85)},{id:"foodbank",t0:82,t1:91.25,set:"foodbank",light:"indoor",sun:[-60,60],shadowR:16,cam:({t})=>{let e=Qe(82,85.6,t),n=Qe(85.6,91.2,t);return{pos:$t(te(6.5,1.9,7),te(1.2,1.8,6),e).lerp(te(-1,1.6,2.8),.6*n),look:$t(te(5,1.4,-.5),te(-1.6,1.3,-1.4),e),fov:48}},actors:({t})=>{let e=Qe(82.1,84.6,t),n=Ve(8,3,e);return[qt(n,1.3,{view:e<1?"side":"front",flip:!0,mode:e<1?"march":"stand",phase:Jn(9-n),expr:t>he("tax")?"laugh":"grin",prop:e<1?null:"box",facing:-1}),{id:"v0",o:ah(0),x:-3.6,z:-1.95,mode:"stand",prop:"peel",expr:"smile_closed",seed:91,look:.2},{id:"v1",o:ah(1),x:-2,z:-1.95,mode:"stand",prop:"peel",expr:"grin",seed:93},{id:"v2",o:ah(2),x:-.4,z:-1.95,mode:"stand",prop:"peel",expr:"smile",seed:95,facing:1}]},fx:({t})=>{let e=[];for(let i=0;i<6;i++){let s=(t-85.7+i*.37)%1.1/1.1;t>85.7&&e.push(He(Jo(),Ve(-3+i%3*2.1,-1.9,s),1.6+Math.sin(s*Math.PI)*.6,Ve(-.1,.1,s),.16,.1,{rot:s*4}))}let n=ot(t,he("tax"));return n&&e.push(He(Bt("TAX DEDUCTIBLE",{fill:"#3f9a55",bg:"#ffffff",h:260,w:1100}),3.2,2.9,.6,1.5*n,.36*n,{rot:-.12})),e},dof:({t})=>t>86?6:0,focus:()=>te(1.8,1.5,-.6)},{id:"cost",t0:91.25,t1:94.15,set:"home",light:"indoor",sun:[-120,55],shadowR:8,cam:({u:t})=>({pos:vn(te(3.9,1.5,4.6),te(3.3,1.5,1.1),t,.15),look:te(3.35,1.45,1),fov:36}),actors:()=>[qt(3.1,1,{prop:"receipt",expr:"smile",look:.3})],fx:({t})=>{let e=ot(t,he("About"));return e?[He(mp(),3.85,1.7,1.6,.42*e,.74*e,{rot:.1})]:[]},dof:9,focus:()=>te(3.4,1.6,1.3)},{id:"globe",t0:94.15,t1:103.15,set:"globe",light:"space",sun:[40,20],shadowR:6,fog:[200,400],cam:({t})=>{let e=Qe(94.15,103.1,t);return{pos:te(Ve(-1.5,1.5,e),Ve(3.2,2.6,e),Ve(17.5,15.5,e)),look:te(0,1.6,0),fov:36}},pose:({t,refs:e})=>{e.globe.rotation.y=Ve(1.95,.55,Qe(94.15,103.1,t)),e.globe.rotation.x=.25,e.arcs.forEach((n,i)=>{let s=is((t-96-i*.28)/1.1);n.geometry.setDrawRange(0,Math.floor(n.userData.count*s/6)*6),n.visible=s>0})},fx:({t})=>{let e=[],n=Math.round(Ve(0,125e4,Qe(he("One",7),he("miles.",4),t))),i=ot(t,he("reward?"));i&&e.push(He(Bt(n.toLocaleString("en-US"),{fill:"#ffd84a",h:280,w:1e3,sub:"FREQUENT FLYER MILES"}),0,5,3,4.2*i,1.18*i));let s=ot(t,he("thirty-one"));s&&e.push(He(Bt("31x EUROPE",{fill:"#ffffff",bg:"#2f6fb5",h:240,w:800}),.7,3.3,3.5,1.9*s,.57*s,{opacity:vi(t,100.85)}));let r=ot(t,he("Plus"));return r&&e.push(He(pp(),.5,3+Math.sin(t*2)*.05,4,2.2*r,1.37*r,{rot:Math.sin(t*1.5)*.1})),e},dof:0},{id:"hollywood",t0:103.15,t1:106.5,set:"theater",light:"dusk",sun:[-110,8],shadowR:20,cam:({u:t})=>({pos:$t(te(.9,1.3,12.2),te(.5,1.45,11.4),xi(t)),look:$t(te(0,2.7,3),te(0,2.4,4),xi(t)),fov:60,roll:3}),pose:({t,refs:e})=>{e.bulbs.forEach((n,i)=>n.visible=(Math.floor(t*8)+i)%3!==0)},actors:({t})=>{let e=Ve(8.2,6.6,Qe(103.2,106.4,t));return[qt(0,e,{mode:"stroll",phase:Jn(8.5-e),expr:"grin",wave:Math.sin(t*10)*.5+.5}),...[0,1,2,3].map(n=>({id:"fan"+n,o:lb(n),x:(n%2?1:-1)*(1.5+(n>1?.6:0)),z:5+n*.9,mode:"stand",prop:n%2?"phone":"cheer",expr:n%2?"grin":"laugh",seed:100+n,facing:n%2?-1:1}))]},fx:({t})=>{let e=[];for(let n=0;n<4;n++)Math.floor(t*6+n*1.7)%5===0&&e.push(He(fa("#ffffff",10),(n%2?1:-1)*(1.45+(n>1?.6:0)),1.9,5.2+n*.9,.7,.7,{rot:n}));return e},dof:5,focus:({t})=>te(0,1.7,Ve(8.5,5.6,Qe(103.2,106.4,t)))},{id:"later",t0:106.5,t1:112.35,set:"airport",light:"golden",sun:[-80,9],shadowR:14,cam:({u:t})=>({pos:vn(te(1.5,1.45,8.9),te(-1.5,1.2,6.5),t,.2),look:te(-1.2,1.25,6.4),fov:46}),pose:({t,refs:e})=>{e.plane.position.set(4-(t-106.5)*.6,0,-34)},actors:({t})=>[{id:"davidOld",o:ab,x:-1.5,z:6.76,y:.42,mode:"sit",prop:"phone",expr:t>he("faster")?"smile_closed":"smile",seed:5,look:.5,scale:1}],fx:({t})=>{let e=[],n=ot(t,he("Twenty"));if(n&&e.push(He(Bt("20 YEARS LATER",{fill:"#ffffff",bg:"#26222a",h:220,w:900}),-1.5,2.9,6.3,1.5*n,.37*n,{opacity:vi(t,he("still")+.3)})),t>he("earning")){let i=4e6+Math.floor((t-he("earning"))*41123),s=ot(t,he("earning"));e.push(He(Bt(i.toLocaleString("en-US")+" MI",{fill:"#7fe0a0",h:220,w:1e3}),-1.1,2.6,6.6,1.5*s,.33*s)),e.push(He(Bt("x5",{fill:"#ffd84a",h:300,w:400}),-.1,2.15,6.7,.45*ot(t,he("five",3)),.34*ot(t,he("five",3))))}return e},dof:8,focus:()=>te(-1.5,1.3,6.5)},{id:"end",t0:112.35,t1:ss,set:"airport",light:"golden",sun:[-80,9],shadowR:22,cam:({t})=>{let e=Qe(112.35,119,t);return{pos:$t(te(-.7,1.5,-.6),te(-1.4,1.9,4),e),look:$t(te(.3,1.75,-6),te(.2,3.6,-20),e),fov:44}},pose:({t,refs:e})=>{let n=is((t-113.5)/5.5);e.plane.position.set(4-n*60,Math.max(0,n-.3)*30,-34-n*10),e.plane.rotation.z=-Math.max(0,Math.min(.25,(n-.25)*.6)),e.plane.rotation.y=0},actors:({t})=>[qt(.2,-4.4,{prop:t>he("really")-.2?"pudding":null,expr:t>he("David",5)?"smile_closed":"smile",facing:-1,look:-.3})],fx:({t})=>{let e=ot(t,he("was",5));return e?[He(da(),.75,2.15,-4.1,.3*e,.3*e,{rot:t*2})]:[]},dof:4,focus:()=>te(.2,1.7,-4.4)}],Sp=[6.6,46.15,74.1],bp=t=>pa.find(e=>t>=e.t0&&t<e.t1)??pa[pa.length-1],Mp=(()=>{let t=[],e=null;return wr.forEach((n,i)=>{let s=wr[i-1];(!e||e.words.length>=3||s&&/[.,?!…]$/.test(s.t)||s&&n.s-s.e>.35||e&&e.words.map(a=>a.t).join(" ").length+n.t.length>19)&&(e={words:[],s:n.s,e:n.e},t.push(e)),e.words.push(n),e.e=n.e}),t.forEach((n,i)=>{let s=t[i+1];n.e=s?Math.min(s.s,n.e+.6):n.e+.8}),t})();var ub=112,En=60/ub,lh=En*4,Ds=t=>440*Math.pow(2,(t-69)/12),hb=[{r:60,q:"M"},{r:57,q:"m"},{r:65,q:"M"},{r:67,q:"M"}],fb=[{r:57,q:"m"},{r:65,q:"M"},{r:62,q:"m"},{r:64,q:"M"}],db=t=>[t.r,t.r+(t.q==="M"?4:3),t.r+7],pb=t=>t>=74.1&&t<82?"minor":t>=54.3&&t<60.45?"cruise":t>=112.3?"end":"major";async function Er(t,e=48e3){let n=new OfflineAudioContext(2,Math.ceil(t*e),e),i=n.createGain();i.gain.value=.9,i.connect(n.destination);let s=n.createGain();s.gain.value=.22,s.connect(i);for(let[b,R,U]of[[.137,.35,-.4],[.211,.32,.4]]){let k=n.createDelay(1);k.delayTime.value=b;let V=n.createGain();V.gain.value=R;let X=n.createBiquadFilter();X.type="lowpass",X.frequency.value=3200;let W=n.createStereoPanner();W.pan.value=U,k.connect(X),X.connect(V),V.connect(k),X.connect(W),W.connect(s),Er["_d"+b]=k}let r=(b,R)=>{let U=n.createGain();U.gain.value=R,b.connect(U),U.connect(Er._d0_137??n.destination)},a=n.createGain();a.gain.value=1,a.connect(Er["_d0.137"]),a.connect(Er["_d0.211"]);let o=(b=0,R=1,U=.3)=>{let k=n.createGain();k.gain.value=R;let V=n.createStereoPanner();V.pan.value=b,k.connect(V),V.connect(i);let X=n.createGain();return X.gain.value=U,V.connect(X),X.connect(a),k},l=o(-.25,.32,.35),c=o(.25,.26,.45),h=o(0,.5,.05),u=o(0,.12,.6),f=o(0,.35,0),d=o(.3,.05,.2),g=(b,R,U,k,V=1)=>{let X=n.createOscillator();X.type="triangle",X.frequency.value=R;let W=n.createOscillator();W.type="sine",W.frequency.value=R*2;let $=n.createGain();$.gain.setValueAtTime(0,b),$.gain.linearRampToValueAtTime(.9,b+.008),$.gain.exponentialRampToValueAtTime(.001,b+U);let Y=n.createGain();Y.gain.value=.25*V;let se=n.createBiquadFilter();se.type="lowpass",se.frequency.setValueAtTime(2400*V,b),se.frequency.exponentialRampToValueAtTime(500,b+U),X.connect($),W.connect(Y),Y.connect($),$.connect(se),se.connect(k),X.start(b),W.start(b),X.stop(b+U+.05),W.stop(b+U+.05)},x=(b,R,U)=>{let k=n.createOscillator();k.type="sine",k.frequency.value=R;let V=n.createOscillator();V.type="sine",V.frequency.value=R*4;let X=n.createGain();X.gain.setValueAtTime(0,b),X.gain.linearRampToValueAtTime(1,b+.005),X.gain.exponentialRampToValueAtTime(.001,b+.7);let W=n.createGain();W.gain.setValueAtTime(.3,b),W.gain.exponentialRampToValueAtTime(.001,b+.12),k.connect(X),V.connect(W),W.connect(X),X.connect(U),k.start(b),V.start(b),k.stop(b+.75),V.stop(b+.2)},m=(b,R,U,k)=>{let V=n.createOscillator();V.type="triangle",V.frequency.value=R;let X=n.createGain();X.gain.setValueAtTime(0,b),X.gain.linearRampToValueAtTime(1,b+.02),X.gain.setValueAtTime(1,b+U*.6),X.gain.exponentialRampToValueAtTime(.001,b+U);let W=n.createBiquadFilter();W.type="lowpass",W.frequency.value=600,V.connect(X),X.connect(W),W.connect(k),V.start(b),V.stop(b+U+.05)},p=(b,R,U,k)=>{for(let V of R)for(let X of[-6,6]){let W=n.createOscillator();W.type="sawtooth",W.frequency.value=V,W.detune.value=X;let $=n.createGain();$.gain.setValueAtTime(0,b),$.gain.linearRampToValueAtTime(.18,b+.4),$.gain.setValueAtTime(.18,b+U-.3),$.gain.linearRampToValueAtTime(0,b+U);let Y=n.createBiquadFilter();Y.type="lowpass",Y.frequency.value=900,W.connect($),$.connect(Y),Y.connect(k),W.start(b),W.stop(b+U+.05)}},y=b=>{let R=n.createOscillator();R.type="sine",R.frequency.setValueAtTime(110,b),R.frequency.exponentialRampToValueAtTime(42,b+.18);let U=n.createGain();U.gain.setValueAtTime(0,b),U.gain.linearRampToValueAtTime(1,b+.01),U.gain.exponentialRampToValueAtTime(.001,b+.3),R.connect(U),U.connect(f),R.start(b),R.stop(b+.35)},S=n.createBuffer(1,e,e);{let b=S.getChannelData(0);for(let R=0;R<b.length;R++)b[R]=Math.random()*2-1}let M=b=>{let R=n.createBufferSource();R.buffer=S;let U=n.createBiquadFilter();U.type="bandpass",U.frequency.value=6500,U.Q.value=1.2;let k=n.createGain();k.gain.setValueAtTime(0,b),k.gain.linearRampToValueAtTime(.6,b+.06),k.gain.linearRampToValueAtTime(0,b+.16),R.connect(U),U.connect(k),k.connect(d),R.start(b,Math.random()*.5),R.stop(b+.2)},D=[[12,null,16,19,null,16,14,null],[12,14,16,null,19,null,21,19],[7,null,12,null,16,14,12,null],[19,17,16,14,12,null,null,null]],A=0,v=Math.ceil(t/lh);for(let b=0;b<v;b++){let R=A+b*lh,U=pb(R+.1),V=(U==="minor"?fb:hb)[b%4],X=db(V),W=U==="minor";m(R,Ds(V.r-24),En*1.6,h),m(R+2*En,Ds(V.r-24+(W?0:7)),En*1.4,h),W||m(R+3.5*En,Ds(V.r-12),En*.45,h);for(let $=0;$<8;$++)if(!(W&&$%2===0)&&($%2===1||U==="cruise"))for(let Y of X)g(R+$*En/2,Ds(Y),.35,l,U==="cruise"?1.2:1);if(W?b%2===0&&[0,3,7].forEach(($,Y)=>x(R+Y*En,Ds(V.r+12+$),c)):D[(b>>1)%4].forEach((Y,se)=>{Y!==null&&(b%4<3||se<4)&&x(R+se*En/2,Ds(V.r+Y),c)}),p(R,X.map($=>Ds($)),lh,u),U!=="minor"&&(y(R),y(R+2*En),(U==="cruise"||U==="end")&&(y(R+En),y(R+3*En))),U==="cruise"||U==="major")for(let $=0;$<4;$++)M(R+$*En+En/2)}let P=i.gain;P.setValueAtTime(0,0),P.linearRampToValueAtTime(.9,.4);let w=0;for(let b of wr)b.s-w>.45?(P.setTargetAtTime(.9,w+.05,.08),P.setTargetAtTime(.28,b.s-.12,.05)):w===0&&P.setTargetAtTime(.28,Math.max(.01,b.s-.12),.05),w=b.e;return P.setTargetAtTime(.9,w+.1,.15),P.setTargetAtTime(0,t-1,.35),n.startRendering()}var rs=1080,Ps=1920,mb={day:{lit:[1.55,1.48,1.34],shade:[.36,.36,.47],lift:[.05,.06,.11],lambert:.35,sideK:.84,term:.2,sat:1.08,charTint:[1,.96,.94],charShade:.86,sky:["#bcd6f0","#9cc3ec","#6aa2e2","#4f8edd","#3876ce"],skyE:[0,3,8,16,40],fog:"#bcd6f0",fogN:40,fogF:320,sunCol:"#fff3e0",grade:"day"},indoor:{lit:[1.3,1.28,1.22],shade:[.7,.68,.78],lift:[.03,.03,.05],lambert:.25,sideK:.9,term:.25,sat:1.06,charTint:[1,.98,.95],charShade:.92,sky:["#e8e2d4","#e8e2d4","#e8e2d4","#e8e2d4","#e8e2d4"],skyE:[0,3,8,16,40],fog:"#e8e2d4",fogN:60,fogF:400,sunCol:"#fff6e8",grade:"day"},golden:{lit:[1.6,1.05,.64],shade:[.3,.28,.52],lift:[.04,.06,.17],lambert:.35,sideK:.82,term:.1,sat:1.1,charTint:[1,.86,.72],charShade:.88,sky:["#ffc47c","#f7ae78","#e8967c","#c4848e","#8a6f8a"],skyE:[0,4,10,20,40],fog:"#f2b98e",fogN:60,fogF:420,sunCol:"#ffb36b",grade:"golden"},dusk:{lit:[1.3,.85,.66],shade:[.26,.24,.5],lift:[.04,.05,.16],lambert:.35,sideK:.82,term:.12,sat:1.1,charTint:[1,.84,.76],charShade:.88,sky:["#ffb07a","#e8907e","#b8708e","#6a548c","#3a3a6e"],skyE:[0,4,10,20,40],fog:"#d99a8a",fogN:50,fogF:300,sunCol:"#ffa070",grade:"golden"},space:{lit:[1.6,1.55,1.45],shade:[.14,.16,.32],lift:[.02,.03,.08],lambert:.4,sideK:.9,term:.25,sat:1.1,charTint:[1,1,1],charShade:.9,sky:["#16234a","#121d40","#0e1736","#0b122c","#080d22"],skyE:[-40,-10,0,20,60],fog:"#0b122c",fogN:200,fogF:500,sunCol:"#ffffff",grade:"day"}},ch=class{constructor(e=1){this.scale=e;this.renderer=new ro({antialias:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.setSize(rs*e,Ps*e,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eu,this.renderer.outputColorSpace=et,this.renderer.toneMapping=ni,this.out.width=rs*e,this.out.height=Ps*e,this.og=this.out.getContext("2d"),this.cam.layers.enable(rn),this.scene.add(this.sun,this.sun.target,this.hemi,this.cast.root),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.02,this.skyMat=new gt({uniforms:{c0:{value:new Te},c1:{value:new Te},c2:{value:new Te},c3:{value:new Te},c4:{value:new Te},e:{value:new Et},e4:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 c0,c1,c2,c3,c4; uniform vec4 e; uniform float e4; varying vec3 vP;
        void main(){ float el = asin(clamp(normalize(vP).y,-1.0,1.0));
          vec3 c = mix(c0, c1, smoothstep(e.x, e.y, el)); c = mix(c, c2, smoothstep(e.y, e.z, el)); c = mix(c, c3, smoothstep(e.z, e.w, el)); c = mix(c, c4, smoothstep(e.w, e4, el));
          gl_FragColor = vec4(c, 1.0); }`,side:Vt,depthWrite:!1,fog:!1}),this.sky=new Le(new Qn(1500,48,24),this.skyMat),this.sky.layers.set(rn),this.sky.renderOrder=-1,this.sky.frustumCulled=!1,this.scene.add(this.sky),this.scene.fog=this.fog;for(let s of Object.keys(ju)){let r=ju[s]();r.root.visible=!1,this.scene.add(r.root),this.sets.set(s,r),Md(r.root)}let n=this.sets.get("store").refs;n.full=n.puddingShelf.face.material,n.empty=F(mt(la("emptyP","empty",3),11/3.2,1)),this.composer=new ed(this.renderer,{frameBufferType:ri,multisampling:4}),this.composer.setSize(rs*e,Ps*e),this.composer.addPass(new id(this.scene,this.cam)),this.ink=new Bo(this.scene,this.cam),this.composer.addPass(this.ink),this.composer.addPass(new bo(this.cam,this.lens.pre)),this.composer.addPass(new bo(this.cam,this.lens.main));let i=new nd({blendFunction:Xe.ADD,intensity:.5,luminanceThreshold:1,luminanceSmoothing:.2,mipmapBlur:!0,levels:6,radius:.6});this.composer.addPass(new bo(this.cam,i,new sd({mode:bn.NEUTRAL}),this.grade))}scale;renderer;scene=new Ii;cam=new on(40,rs/Ps,.1,2e3);composer;sets=new Map;cast=new Qo;sun=new vo("#ffffff",2.6);hemi=new go("#cfe6ff","#6c5c8c",.6);sky;skyMat;fog=new ao("#bcd6f0",40,320);ink;lens=new No({maxCoC:24,nearScale:1.2});grade=new Fo(Yu.day,1);out=document.createElement("canvas");og;applyLight(e,n,i,s,r){let a=mb[e];di.uLitCol.value.set(a.lit[0],a.lit[1],a.lit[2]),di.uShadeCol.value.set(a.shade[0],a.shade[1],a.shade[2]),di.uShadeLift.value.set(a.lift[0],a.lift[1],a.lift[2]),di.uLambert.value=a.lambert,di.uSideK.value=a.sideK,di.uTerm.value=a.term,di.uSat.value=a.sat,di.uBounce.value.set(e==="golden"?.04:0,e==="golden"?.02:0,0),sa.uCharTint.value.set(a.charTint[0],a.charTint[1],a.charTint[2]),sa.uCharShade.value=a.charShade;let o=Zi.degToRad(n[0]),l=Zi.degToRad(n[1]),c=new B(Math.cos(l)*Math.cos(o),Math.sin(l),Math.cos(l)*Math.sin(o));this.sun.color.set(a.sunCol),this.sun.intensity=2.6,this.sun.position.copy(i).addScaledVector(c,120),this.sun.target.position.copy(i),this.sun.target.updateMatrixWorld();let h=this.sun.shadow.camera;h.left=-s,h.right=s,h.top=s,h.bottom=-s,h.near=1,h.far=260,h.updateProjectionMatrix();let u=this.skyMat.uniforms;a.sky.forEach((d,g)=>ra(d,u["c"+g].value));let f=a.skyE.map(d=>Zi.degToRad(d));return u.e.value.set(f[0],f[1],f[2],f[3]),u.e4.value=f[4],ra(a.fog,this.fog.color),this.fog.near=r?.[0]??a.fogN,this.fog.far=r?.[1]??a.fogF,wd(this.grade,a.grade),c}frame(e,n=!0){let i=e/jn,s=bp(i),r=(i-s.t0)/(s.t1-s.t0);for(let[g,x]of this.sets)x.root.visible=g===s.set;let a=this.sets.get(s.set),o={t:i,u:r,refs:a.refs};s.pose?.(o);let l=s.cam(o);this.cam.position.copy(l.pos),this.cam.up.set(0,1,0),this.cam.lookAt(l.look),l.roll&&this.cam.rotateZ(Zi.degToRad(l.roll)),this.cam.fov=l.fov,this.cam.updateProjectionMatrix(),this.cam.updateMatrixWorld(),this.sky.position.copy(this.cam.position);let c=s.focus?s.focus(o):l.look.clone(),h=this.applyLight(s.light,s.sun,s.set==="globe"?new B:c.clone().setY(0),s.shadowR??20,s.fog);this.cast.update(i,s.actors?.(o)??[],s.fx?.(o)??[],this.cam,h);let u=new B;this.cam.getWorldDirection(u),this.lens.focus=Math.max(.3,c.clone().sub(this.cam.position).dot(u));let f=typeof s.dof=="function"?s.dof(o):s.dof??0;this.lens.cInf=f,this.composer.render();let d=this.og;d.globalAlpha=1,d.drawImage(this.renderer.domElement,0,0);for(let g of Sp){let x=Math.round((i-g)*jn);x>=0&&x<4&&(d.fillStyle=`rgba(255,255,255,${[1,.75,.45,.2][x]})`,d.fillRect(0,0,this.out.width,this.out.height))}i>ss-.6&&(d.fillStyle=`rgba(0,0,0,${xi((i-(ss-.6))/.6)})`,d.fillRect(0,0,this.out.width,this.out.height)),n&&this.caption(i)}caption(e){let n=Mp.find(g=>e>=g.s-.05&&e<g.e);if(!n)return;let i=this.og,s=this.scale,r=Math.min(1,(e-n.s+.05)*30/5),a=86*s,o=Ps*s*.705;i.save(),i.font=`900 ${a}px "Arial Black", Arial, sans-serif`,i.textBaseline="middle",i.lineJoin="round";let l=n.words.map(g=>g.t.toUpperCase().replace(/\.\.\.$/,"\u2026")),c=a*.3,h=l.map(g=>i.measureText(g).width),u=h.reduce((g,x)=>g+x,0)+c*(l.length-1),f=Math.min(1,rs*s*.88/u)*(.86+.14*r);i.translate(rs*s/2,o),i.scale(f,f);let d=-u/2;l.forEach((g,x)=>{let m=e>=n.words[x].s-.03&&(x===l.length-1||e<n.words[x+1].s-.03);i.lineWidth=a*.22,i.strokeStyle="#141018",i.strokeText(g,d,0),i.fillStyle=m?"#ffd84a":"#ffffff",i.fillText(g,d,0),d+=h[x]+c}),i.restore()}},gb=()=>{document.title="The Pudding Guy \xB7 render",document.body.innerHTML="",document.body.style.cssText="margin:0;background:#15121a;color:#eee;font:15px system-ui,sans-serif;display:flex;gap:18px;padding:16px;box-sizing:border-box;min-height:100vh";let t=document.createElement("div");t.style.cssText="flex:0 0 auto";let e=document.createElement("div");e.style.cssText="flex:1;max-width:520px",document.body.append(t,e);let n=document.createElement("div");n.innerHTML="<h2 style='margin:0 0 8px'>The Pudding Guy \u2014 1080\xD71920 render</h2>",e.append(n);let i=document.createElement("pre");i.style.cssText="white-space:pre-wrap;background:#221d29;padding:10px;border-radius:8px;min-height:120px",e.append(i);let s=document.createElement("div");s.style.cssText="height:14px;background:#2a2433;border-radius:7px;overflow:hidden;margin:10px 0";let r=document.createElement("div");r.style.cssText="height:100%;width:0;background:#ffd84a",s.append(r),e.append(s);let a=document.createElement("button");a.textContent="\u25B6 Render video",a.id="renderBtn",a.style.cssText="font:700 16px system-ui;padding:10px 18px;border-radius:8px;border:0;background:#ffd84a;cursor:pointer",e.append(a);let o=document.createElement("div");return o.style.marginTop="14px",e.append(o),{left:t,log:l=>{i.textContent+=l+`
`,window.__log=i.textContent},prog:l=>r.style.width=(l*100).toFixed(1)+"%",btn:a,dl:o}};async function vb(){try{let e=await new Promise((i,s)=>{let r=indexedDB.open("pudrender",1);r.onupgradeneeded=()=>r.result.createObjectStore("f"),r.onsuccess=()=>i(r.result),r.onerror=()=>s(r.error)}),n=await new Promise(i=>{let r=e.transaction("f","readonly").objectStore("f").get("voice.mp3");r.onsuccess=()=>i(r.result),r.onerror=()=>i(void 0)});if(n)return n}catch{}let t=window.PUD_VOICE_URL;if(t)try{return await(await fetch(t)).arrayBuffer()}catch{}return null}async function xb(t){let n=Math.ceil(ss*48e3);t("music: synthesizing score\u2026");let i=await Er(ss,48e3),s=await vb(),r=new OfflineAudioContext(2,n,48e3),a=r.createBufferSource();a.buffer=i;let o=r.createGain();if(o.gain.value=.55,a.connect(o),o.connect(r.destination),a.start(0),s){let f=await new OfflineAudioContext(1,1,48e3).decodeAudioData(s.slice(0)),d=r.createBufferSource();d.buffer=f;let g=r.createDynamicsCompressor();g.threshold.value=-20,g.ratio.value=3,g.attack.value=.005,g.release.value=.15;let x=r.createGain();x.gain.value=1.25,d.connect(g),g.connect(x),x.connect(r.destination),d.start(0),t(`voice: ${f.duration.toFixed(2)} s`)}else t("\u26A0 voice not found (music only)");let l=r.createDynamicsCompressor(),c=await r.startRendering(),h=0;for(let f=0;f<2;f++){let d=c.getChannelData(f);for(let g=0;g<d.length;g++)h=Math.max(h,Math.abs(d[g]))}let u=h>0?.89/h:1;for(let f=0;f<2;f++){let d=c.getChannelData(f);for(let g=0;g<d.length;g++)d[g]*=u}return t(`mix: peak ${h.toFixed(2)} -> -1 dBFS`),c}async function Ap(t,e,n=0,i=oh){let s=e.log,r=await xb(s),a="aac",o={codec:"mp4a.40.2",sampleRate:48e3,numberOfChannels:2,bitrate:192e3};(await AudioEncoder.isConfigSupported(o)).supported||(a="opus",o.codec="opus");let l={codec:"avc1.640028",width:rs,height:Ps,bitrate:12e6,framerate:jn,avc:{format:"avc"}};(await VideoEncoder.isConfigSupported(l)).supported||(l.codec="avc1.4d0028"),s(`codecs: ${l.codec} + ${a}`);let c=new bd({target:new Bu,video:{codec:"avc",width:rs,height:Ps,frameRate:jn},audio:{codec:a,numberOfChannels:2,sampleRate:48e3},fastStart:"in-memory"}),h=new VideoEncoder({output:(A,v)=>c.addVideoChunk(A,v),error:A=>s("video error "+A)});h.configure(l);let u=new AudioEncoder({output:(A,v)=>c.addAudioChunk(A,v),error:A=>s("audio error "+A)});u.configure(o);let f=r.getChannelData(0),d=r.getChannelData(1),g=1024,x=Math.round(n/jn*48e3),m=Math.min(f.length,Math.round(i/jn*48e3));for(let A=x;A<m;A+=g){let v=Math.min(g,m-A),P=new Float32Array(v*2);P.set(f.subarray(A,A+v),0),P.set(d.subarray(A,A+v),v),u.encode(new AudioData({format:"f32-planar",sampleRate:48e3,numberOfFrames:v,numberOfChannels:2,timestamp:Math.round((A-x)/48e3*1e6),data:P}))}await u.flush();let p=performance.now();for(let A=n;A<i;A++){t.frame(A);let v=new VideoFrame(t.out,{timestamp:Math.round((A-n)*1e6/jn),duration:Math.round(1e6/jn)});for(h.encode(v,{keyFrame:(A-n)%60===0}),v.close();h.encodeQueueSize>6;)await new Promise(P=>setTimeout(P,2));if(A%15===0){e.prog((A-n)/(i-n));let P=(performance.now()-p)/1e3,w=(A-n+1)/P;window.__progress={f:A,to:i,fps:w,eta:(i-A)/w},await new Promise(b=>setTimeout(b,0))}}await h.flush(),c.finalize();let y=new Blob([c.target.buffer],{type:"video/mp4"});e.prog(1);let S=URL.createObjectURL(y);s(`done: ${(y.size/1e6).toFixed(1)} MB in ${((performance.now()-p)/1e3).toFixed(0)} s`),e.dl.innerHTML="",window.__blob=y;let M=document.createElement("button");M.textContent="\u2B07 Save the_pudding_guy.mp4",M.style.cssText="display:inline-block;font:700 18px system-ui;padding:12px 18px;border-radius:8px;border:0;background:#7fe0a0;color:#111;cursor:pointer",M.onclick=()=>_p(s);let D=document.createElement("video");D.src=S,D.controls=!0,D.style.cssText="display:block;margin-top:12px;height:480px;background:#000",e.dl.append(M,D),window.__done={size:y.size}}async function _p(t){let e=window.__blob;if(!e)return"no video yet";try{let i=await window.claude?.use?.("downloads");if(i){let s=await i.save({filename:"the_pudding_guy.mp4",data:e});return t("saved: "+s.status),s.status}}catch(i){return t("save: "+(i?.code??i)),"err "+(i?.code??i)}let n=document.createElement("a");return n.href=URL.createObjectURL(e),n.download="the_pudding_guy.mp4",n.click(),"anchor"}async function wp(){let t=gb();t.log("building sets\u2026");let e=new URLSearchParams(location.search).get("scale"),n=new ch(e?+e:1);window.short=n,n.out.style.cssText="height:min(86vh,900px);border-radius:10px;background:#000",t.left.append(n.out),n.frame(Math.round(5.95*jn)),t.log(`ready \xB7 ${pa.length} shots \xB7 ${oh} frames (${ss}s)`),t.btn.onclick=()=>{t.btn.disabled=!0,t.btn.textContent="rendering\u2026",Ap(n,t).catch(i=>t.log("ERROR "+(i?.stack??i)))},window.__render=()=>t.btn.click(),window.__encodeTest=(i,s)=>Ap(n,t,i,s),window.__ready=!0,window.addEventListener("message",async i=>{let s=i.data;if(!s||typeof s.type!="string")return;let r=a=>{try{i.source?.postMessage(a,"*")}catch{}};s.type==="pud-render"&&!t.btn.disabled&&(t.btn.click(),r({type:"pud-ack",what:"render"})),s.type==="pud-save"&&r({type:"pud-ack",what:"save",r:await _p(t.log)}),s.type==="pud-status"&&r({type:"pud-status",log:(window.__log||"").slice(-600),progress:window.__progress,done:window.__done,voice:window.__voice,ready:window.__ready})})}window.PUD={boot:wp};var yb=async t=>{let e=await new Promise((n,i)=>{let s=indexedDB.open("pudrender",1);s.onupgradeneeded=()=>s.result.createObjectStore("f"),s.onsuccess=()=>n(s.result),s.onerror=()=>i(s.error)});await new Promise((n,i)=>{let s=e.transaction("f","readwrite");s.objectStore("f").put(t,"voice.mp3"),s.oncomplete=n,s.onerror=()=>i(s.error)}),window.__voice=t.byteLength};window.addEventListener("message",t=>{let e=t.data;e&&e.type==="pud-voice"&&e.buf instanceof ArrayBuffer&&yb(e.buf).then(()=>{try{t.source?.postMessage({type:"pud-voice-ok",n:e.buf.byteLength},"*")}catch{}})});window.PUD_NO_AUTOBOOT||wp();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.36.7 build Thu Feb 06 2025
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2025 Raoul van Rüschen
   * @license Zlib
   *)
*/
