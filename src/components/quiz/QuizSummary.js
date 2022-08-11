import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30 ) {
            remark = "Vous avez besoin de plus d'information!";
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Plus de chance la prochaine fois!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'Tu peux faire mieux!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'Tu as été excellent!';
        } else {
            remark = "Vous êtes un génie !";
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Le quiz est terminé</h1>
                    <div className="container stats">
                        <h4>{remark}</h4>
                        <h2>Votre Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Nombre total de questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Nombre de tentatives de questions: </span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />

                        <span className="stat left">Nombre de bonnes réponses: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Nombre de mauvaises réponses: </span>
                        <span className="right">{this.state.wrongAnswers}</span><br />

              

                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/play/quiz">Rejouer</Link>
                            </li>
                            <li>
                                <Link to ="/">Retour à la page d'acceuil</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/play/quiz">Take a Quiz</Link>
                        </li>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="quiz-summary">
                    {stats}
                </div>
            </Fragment>
        );
    }
}

export default QuizSummary;