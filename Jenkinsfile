pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devops-app:2.0'
        CONTAINER_NAME = 'devops-container'
        HOST_PORT = '8081'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Retrieving project from GitHub...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Test') {
            steps {
                echo 'Checking index.html...'
                sh 'grep -F "Hello World from Jenkins!" index.html'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to the target host...'
                sh 'docker rm -f ${CONTAINER_NAME} || true'
                sh 'docker run -d -p ${HOST_PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}'
                echo 'Deployment completed!'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
            echo 'Open http://localhost:8081 to view the application.'
        }

        failure {
            echo 'Deployment failed. Check the Jenkins Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
