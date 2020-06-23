export interface IGithubBranch {
    commit: {
        sha: string,
        urL: string;
    };
    name: string;
    protected: boolean;
}
