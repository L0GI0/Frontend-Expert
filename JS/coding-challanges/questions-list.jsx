import React from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';


export default function QuestionList() {
  // Write your code here.
  const [questions, submissions] = useQuestionsAndSubmissions();
  const questionsByCategory = getQuestionsByCategory(questions);
  const submissionsByQuestions = getSubmissionsByQuestions(submissions);
  const categories = Object.keys(questionsByCategory);

  return (
    <>
      {
        categories.map(category => {
          <Category
            key={category}
            category={category}
            questions={questionsByCategory[category]}
            submissionsByQuestions={submissionsByQuestions}/>
        })
      }
    </>
  );
}

function Category({category, questions, submissionsByQuestions}) {
  const totalQuestions = questions.length;
  const newQuestionsCorrect = questions.reduce((sum, question) => {
    return submissionsByQuestions[question.id] === 'CORRECT' ? sum + 1: sum;
    }, 0); 


  return (
    <div className="category">
      <h2>
        {category} - {newQuestionsCorrect} / {totalQuestions}
      </h2>
      {
        questions.map(question => {
          <Question
            key={question.id}
            question={question}
            submissionsByQuestion={submissionsByQuestion}
            />
        })
      }
    </div>
  )
}

function Question({question, submissionsByQuestions}) {
  const submissionsStatus = submissionsByQuestions(question.id);
  const statusClass = 
    submissionsStatus = null ? 'unattempted' : submissionsStatus.toLowerCase().replace('_', '-');

  return (
    <div className="question">
      <div className={`status ${statusClass}`}/>
      <h2>{question.name}</h2>
    </div>
  )
}

function useQuestionsAndSubmissions() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [questionsResponse, submissionsResponse] = await Promise.all([
        fetch(QUESTIONS_API_BASE_URL),
        fetch(SUBMISSIONS_API_BASE_URL)
      ]);

      const [questions, submissions] = await Promise.all([
        questionsResponse.json(),
        submissionsResponse.json(),
      ]);

      setQuestions(questions);
      setSubmissions(submissions);

      fetchData();
    }
  }, [])

  return [questions, submissions];
  
}

function getQuestionsByCategory(questions) {
  const questionsByCategory = {};

  questions.forEach(({category, ...question}) => {
    if(!questionsByCategory.hasOwnProperty(category)) {
      questionsByCategory[category] = [];
    }
    questionsByCategory[category].push(question);
  })

  return questionsByCategory;
}

function getSubmissionsByQuestions(submissions) {
  const submissionsByQuestion = {};
  submissions.forEach(({questionId, status}) => {
    submissionsByQuestion[questionId] = status;
  })

  return submissionsByQuestion;
}

