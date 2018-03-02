const path=require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports={
  plugins: [
   // new CleanWebpackPlugin(['dist']),
   new BundleAnalyzerPlugin()
 ],
 optimization: {
		splitChunks: {
			minSize: 1,
      chunks: "initial",
			name:"vendor"
		}
	}
}
