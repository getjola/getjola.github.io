var is_mobile = !!navigator.usermAgent.match(/iphone|android|blackberry/ig) || false;

if (is_mobile) {
  window.location.href = "./m/profile.html"
}
