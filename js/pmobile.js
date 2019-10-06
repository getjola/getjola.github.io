var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

if (is_mobile) {
  window.location.href = "./m/profile.html"
}
