@Library('shared') _
pipeline {
    agent any

    stages {
        stage('Hello') {
            steps{
                script{
                    hello()
                    }
                }
            }
        
        stage('Code Clone'){
            steps{
                script{
                    clone('https://github.com/nasirhayat028/resume.git','main')
                }
            }
        }
        
        stage ('image build'){
            steps{
                script{
                    docker_build(
                        imageName: 'nasirhayat028/resume',
                        imageTag:'jenkinsPush01',
                        )
                }
            }
        }
        stage('Show'){
            steps{
                sh 'docker images'
            }
        }
        stage('Push Image'){
             steps{
                script{
                    docker_push(
                        imageName: 'nasirhayat028/resume',
                        imageTag:'jenkinsPush01'
                        )
                }
            }
        }
           
        
    }
}
