const isDev =
  process.env.NODE_ENV === "development" ||
  (typeof location === "object" && !!location.href.match(/localhost/));

  
const REQUIRE_REGISTRATION = false;

export { isDev, REQUIRE_REGISTRATION };
