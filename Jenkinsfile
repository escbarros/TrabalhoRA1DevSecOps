pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                  docker info
                  docker version
                  docker compose version
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post{
      always{
        sh 'docker-compose down --remove-orphans -v'
        sh 'docker-compose ps'
      }
    }
}