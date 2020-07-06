import app from './app';

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`COM222 Back listening on port ${port}!`);
});
