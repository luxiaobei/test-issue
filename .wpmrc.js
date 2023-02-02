module.exports = {
    allowBranch: ['main'],
    bumpFiles: [
        'package.json',
        'package-lock.json'
    ],
    skip: {
        confirm: true
    },
    // backward compatibility changelog
    // because we didn't use tag prefix(v) when create tag before
    // should set tagPrefix as empty (default is 'v')
    // otherwise, the changelog will rebuild, and will be lost past versions
    tagPrefix: '',
    hooks: {
        prepublish: 'npm run build'
    }
};
