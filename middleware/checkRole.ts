import jwt from 'jsonwebtoken';

export default (role: string) => {
  return (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  
    if (token) {
      try {
        const decoded = jwt.verify(token, 'secret123');

        if (decoded.role !== role) {
          return res.status(403).json({
            message: 'С вашей ролью нет доступа',
          });
        }
  
        req.user = decoded;
        next();
      } catch (err) {
        return res.status(403).json({
          message: 'Нет доступа из-за роли',
        });
      }
    } else {
      return res.status(401).json({
        message: 'Не авторизован',
      });
    }
  };
};