import router from './index.js'
router.beforeEach(async (to, from, next) => {
	document.title = to.meta.title
	console.log(to.meta.title)
	next()
})