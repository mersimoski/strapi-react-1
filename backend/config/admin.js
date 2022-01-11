module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f27004f15116d895d5fb466a348f5e5'),
  },
});
