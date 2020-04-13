import app from './app';

app.listen(process.env.PORT || 3000, () => {
	console.log('Server listening on http://localhost:3000');
});
