module.exports = {
	branches: "master",
	repositoryUrl: "https://github.com/Nagasree2000/my-react-app",
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/github",
			{
				assets: [
					{ path: "build.zip", label: "Build" },
					{ path: "coverage.zip", label: "Coverage" }
				]
			}
		]
	]
};
