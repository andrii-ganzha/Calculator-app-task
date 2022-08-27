pipeline {
    agent any
    environment {
        registry = "$calculator_registry/calculator_repository:latest"
		DOCKERHUB_CREDENTIALS=credentials('dockerhub_cred')
    }

    stages {
        stage('Docker Build') {
            steps {
                sh "docker build -t ${registry} ."
            }
        }
        
    }
}