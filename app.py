from flask import Flask render_template
from dotenv import load_dotenv
load_dotenv()
app=Flask(__name__)
app.secret_key="sneker-studio-dev-key"
@app.route("/")
def index():
  return render_template("index.html")
@app.route("/studio")
def studio():
  return render_template("studio.html",hcaptcha_site_key="")
@app.route("/history")
def history():
  return render_template("history.html,design=[]")
def genarate_concept(prefs):
  if not groq_client:
    raise RuntimeError("GROQ_API_KEY not set")
  chat=groq_chient.chat.compititon.create(
    model='llama-3.3-70b versatile',
    messeges=[{'role':'system','content':"sneaker design expert.joson only."},
    {'role':'user','contact':designs_prompt.formate(prefs)},
    ],temperatere=0.85,max_token=1200,
    
    
  )
  raw=chat.choce


if __name__ == "__main__":
    # app.run() will work once you complete TODOs 1 and 2 above
    app.run(debug=True, port=5000)
