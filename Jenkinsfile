node {
    stage "Container Prep"
    // do the thing in the container
    docker.image('node').inside('-u root') {
        stage 'Install Deps'
        // Deps
        sh "whoami"
        sh "pwd"
        sh "node -v"
        sh "npm install --dev"
        stage 'Test'
        // Do the build
        sh "cd /var/jenkins_home/workspace/test && npm test"
    }
}