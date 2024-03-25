# Steps to Publish a Release

## Create a Release branch
-   Create a release branch with name `release-YYYYMMDD`
-   Add and Commit all file changes with appropriate commint messages

## Verify the packages before release

-   Running the following commands (in the same order as listed) should not result in any error:

    ```
    rush update
    rush build
    ```

##  Create a Pull Request
-   Push the above branch to remote and open a Pull Request against `main` with proper title and description containing all the changes. 



##  Getting Branch Ready for Publish

1.   Execute the command `rush change --verify`.
    This lists all the packages that will be released.

3.  Execute the command `rush change`. This will prompt for all the packages being released, asking for the following information:
    - Type of release (patch/minor/major) - This must match the strategy used to set the version property in all the `package.json` files.
    - Release notes - Provide relevant information about what is being released. [Recommended Practices](https://rushjs.io/pages/best_practices/change_logs/#recommended-practices)

4.  Execute the command `rush version --bump`
    - This will update `version` in `pacakage.json` for all the packages that are  will be published.
    - This also updates `CHANGELOG.json` & `CHANGELOG.md` files, with the latest changes.

    **Note**: Publish command is being run via GitHub actions and we are not able to commit the Changelogs from there, so we need to run step 4 above manually.

5.  Commit all file chnages and push to the branch.

6. Packages will be published once the PR is merged to `main`
