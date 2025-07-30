function onFormSubmit(e) {

    const responses = e.response.getItemResponses();
  
    let name = responses[0].getResponse()
    let email = responses[1].getResponse()
    let phone = responses[2].getResponse()
    let resumeID = responses[3].getResponse()[0]
  
    console.log(name, email, phone, resumeID)
  
    // Get the actual resume file using ID, then convert to base64
    const blob = DriveApp.getFileById(resumeID).getBlob();
    const resumeBase64String = Utilities.base64Encode(blob.getBytes());
  
    const url = 'https://haiderocloud.app.n8n.cloud/webhook/apply-job';
  
    // Assuming this job is of Salesforce Developer
    // The payload needs to contain Job Description
    const payload = {
      "full_name": name,
      "email": email,
      "phone": phone,
      "cv": resumeBase64String,
      "job_id": "123",
      "job_description": {
          "id": "123",
          "title": "Salesforce Developer",
          "department": "Engineering",
          "location": "Lahore",
          "type": "full time",
          "experience": "2+ years",
          "description": "\nWe are seeking a talented and proactive Salesforce Developer requiring a minimum of 2 years of industry experience. As a people-centric company, we prioritize team growth because we believe our people drive our success.\n",
          "requirements": "\nBasic Requirements:\n\nBachelor’s or Master’s in Computer Science or relevant.\nMinimum experience of 2 years\nProficiency with Salesforce.com development especially with Sales and community cloud including modification of standard objects and fields and creation of custom objects and fields\nLWC, Apex and Visualforce development, design, configuration, testing, and deploymentof Salesforce.com solutions\nExperience developing JavaScript front-end apps\nExperience working with source control and continuous integration\nExcellent client-facing, written and oral communication skills\nIn-depth knowledge of Salesforce products and their functionalities\nExperience with Amazon Web Services is a plus\nResponsibilities:\n\nBuild Salesforce applications using Aura, LWC, Apex, and Visualforce and leverage the full capabilities of the Salesforce platform to support the company’s programs.\nCreate/modify existing controllers, controller extensions, and triggers across all platforms.\nDevelop highly interactive UI using LWC, and Visualforce technologies.\nDevelop custom applications using Salesforce. com and integrating salesforce.com with other systems\nApply best practices and design patterns of best-of-breed applications developed on the Salesforce.com platform\nCreate and execute unit, integration, and user acceptance test plans, including use cases and test data\nGather, analyze and document functional and technical requirements for new projects,enhancements to existing solutions, and production issues reported by end users\n"
      }
    };
    UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
    });
  }
  