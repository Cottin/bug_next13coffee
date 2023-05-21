/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
	pageExtensions: ['coffee', 'jsx', 'js', 'ts', 'tsx'],
	webpack(config, options) {
		const { dir, defaultLoaders, dev, isServer } = options
		config.resolve.extensions.push('.coffee')

		config.module.rules.push({
			test: /\.(coffee)$/,
			include: [dir],
			exclude: /node_modules/,
			use: [
				defaultLoaders.babel,
				{
					loader: 'coffee-loader',
				},
			],
		})

		return config
	}
}
