module.exports = (dts, { classes, logger }) => {
	try {
		const dtsFile = Object.keys(classes)
			.map(styleName => `export const ${styleName}: any;`)
			.join('\n')

		return dtsFile
	} catch (error) {
		logger.error(error.message)
	}
}
