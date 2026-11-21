pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Running unit tests...'
                sh 'npm run test:unit'
            }
        }

        stage('Integration Testing') {
            steps {
                echo 'Running integration tests...'
                sh 'npm run test:integration'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t devops-app:1.0 .'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All tests passed and Docker image built.'
        }

        failure {
            echo 'FAILURE: Check the Jenkins Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
