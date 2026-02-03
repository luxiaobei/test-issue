module.exports = {
    allowBranch: ['main', 'release-auto-*'],
    bumpFiles: [
        'package.json',
        'package-lock.json',
        'yarn.lock'
    ],
    skip: {
        changelog: true,
        confirm: true
    },
    // backward compatibility changelog
    // because we didn't use tag prefix(v) when create tag before
    // should set tagPrefix as empty (default is 'v')
    // otherwise, the changelog will rebuild, and will be lost past versions
    tagPrefix: '',
    commitAll: true,
    hooks: {
        
    },
};
