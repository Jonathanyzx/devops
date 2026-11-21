pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm ci'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test -- tests/unit.test.js'
            }
        }

        stage('Integration Testing') {
            steps {
                echo 'Running integration tests...'
                sh 'npm test -- tests/integration.test.js'
            }
        }

        stage('SAST Security Scan') {
            steps {
                echo 'Scanning source code for security vulnerabilities...'
                sh '''
                    docker run --rm \
                    -v "$WORKSPACE:/src" \
                    semgrep/semgrep \
                    semgrep scan --config p/security-audit --error /src
                '''
            }
        }

        stage('Pipeline Summary') {
            steps {
                echo 'Unit tests, integration tests and SAST completed successfully!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All tests and security scans passed!'
        }

        failure {
            echo 'FAILURE: Tests or security scanning detected a problem!'
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
