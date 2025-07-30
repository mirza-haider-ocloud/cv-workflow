# cv-workflow

This workflow gets executed whenenver google form of our job posting is submitted by a candidate.    

The workflow:
- extracts data from candidate's resume
- compares candidate's resume with the job description and assigns a relevance score
- creates candidate's record in db (Airtable)
- if a high relevance score, the candidate is sent an email to schedule interview

<img width="1559" height="619" alt="wf" src="https://github.com/user-attachments/assets/717d800d-647d-4aa4-8f32-f8197b1a3c47" />  
<br/>
<br/>
Google's Apps Script is used to run a trigger function whenver a form is submitted. <br/>
The function can be found in file _formTrigger.js_ <br/>
Its main task it to call the webhook of the n8n workflow. <br/><br/>  

This is how the form looks like:  

<img width="747" height="738" alt="form" src="https://github.com/user-attachments/assets/5c5359b9-5628-4dc7-a7bf-df5f6a8ccc68" />
