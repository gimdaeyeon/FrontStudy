export const isLoggedin = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다");
  }
};

export const isNotLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인 하지 않은 사용자만 접근 가능합니다.");
  }
};
