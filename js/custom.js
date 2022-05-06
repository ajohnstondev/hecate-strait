$(document).ready(function () {

    $("#w-node-_0941d12c-eae9-33b6-8979-5d22a2baec9c-25be96d7").on('click', function () {
        var pass_skillcount = getQuizCounters();
        Add_Skills_Section(pass_skillcount);
    });

    $("#w-node-fd5f3992-2c7f-76a2-4117-70a223359dc0-25be96d7").on('click', function () {
        var CrendentialCount = getCredentialCounters();
        Add_Credential(CrendentialCount);
    });

    $("#w-node-b23da42d-bbee-cce0-8a20-97c43f455e67-25be96d7").on('click', function () {
        var employmentCount = getEmploymentCounters();
        Add_Employment(employmentCount);
    });

    $("#w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac15c-25be96d7").on('click', function () {
        var referenceCount = getReferenceCounters();
        Add_References(referenceCount);
    });


    $('#webflow_skills').on('click', 'a.delete', function(events){
        /////////// Remove_Skills_Section()
        $(this).parents('div').parents('div').eq(1).remove();
        // /////////////////////////////////
        var skillCountAfterRemove = getQuizCounters();
        Rerender_Skills_Section(skillCountAfterRemove);
     });

    $('#webflow_credentials').on('click', 'a.delete', function(events){
        /////////// Remove_Skills_Section()
        $(this).parents('div').parents('div').eq(1).remove();
        // /////////////////////////////////
        var CredentialCounters = getCredentialCounters();
        Rerender_Crendentials_Section(CredentialCounters);
     });
    $('#webflow_employments').on('click', 'a.delete', function(events){
        /////////// Remove_Skills_Section()
        $(this).parents('div').parents('div').eq(1).remove();
        // /////////////////////////////////
        var EmploymentCounters = getEmploymentCounters();
        Rerender_Employments_Section(EmploymentCounters);
     });

    $('#webflow_references').on('click', 'a.delete', function(events){
        /////////// Remove_Skills_Section()
        $(this).parents('div').eq(1).remove();
        // /////////////////////////////////
        var referenceCounters = getReferenceCounters();
        Rerender_References_Section(referenceCounters);
     });


});


function getQuizCounters(){
    var skills = $("#webflow_skills > .profile-add-new");
    var skillsCount = skills.length;
    var pass_skillcount = parseInt(skillsCount);
    return pass_skillcount;
}


function Add_Skills_Section(skillCount) {
    var addSkillSection = `
        <div class="w-layout-grid profile-add profile-add-new">
            <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93d-25be96d7" class="w-layout-grid quiz-buiilder-question">
                <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93e-25be96d7" class="quiz-builder-question-number">
                    <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93f-25be96d7">`+ (skillCount + 2)+`</div>
                </div>
                <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb941-25be96d7" class="quiz-builder-question">
                    <input type="text" class="modal-input w-input" maxlength="256" name="Skill" data-name="Skill" placeholder="" id="Skill">
                    <a href="#" class="button dashboard-body modal-button delete quiz w-button">
                        <span class="inline-leading-icon"><strong></strong></span>Remove Skill
                    </a>
                </div>
            </div>
        </div>
    `;
    $("#webflow_skills").append(addSkillSection);
}


function Rerender_Skills_Section(renderCount) {
    var appendFile = ''
    var addSkillSection = '';
    const quizs = document.querySelectorAll('.profile-add-new');
    quizs.forEach(quiz => {
        quiz.remove();
    });
    for (var k = 0 ; k < renderCount; k++){
        addSkillSection += `
            <div class="w-layout-grid profile-add profile-add-new">
                <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93d-25be96d7" class="w-layout-grid quiz-buiilder-question">
                    <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93e-25be96d7" class="quiz-builder-question-number">
                        <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb93f-25be96d7">`+ (k + 2) +`</div>
                    </div>
                    <div id="w-node-d37d29a3-5d3b-a003-ff40-6e0b9eefb941-25be96d7" class="quiz-builder-question">
                        <input type="text" class="modal-input w-input" maxlength="256" name="Skill" data-name="Skill" placeholder="" id="Skill">
                        <a href="#" class="button dashboard-body modal-button delete quiz w-button">
                            <span class="inline-leading-icon"><strong></strong></span>Remove Skill
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
    appendFile += addSkillSection;
    $("#webflow_skills").append(appendFile);
}


function Add_Credential(CrendentialCount) {
    var addCredentialSection = '';
    addCredentialSection = `
    <div class="w-layout-grid profile-add crendentials">
        <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db5-25be96d7" class="w-layout-grid profile-add-row">
        <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db6-25be96d7" class="profile-add-row-column">
            <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db7-25be96d7">`+ (CrendentialCount + 2) +`</div>
        </div>
        <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db9-25be96d7" class="quiz-builder-question"><label for="Education-Credential" class="modal-input-label-copy">Credential</label><input type="text" class="modal-input w-input" maxlength="256" name="Education-Credential" data-name="Education Credential" placeholder="" id="Education-Credential"><label for="Education-Issuer" class="modal-input-label">Issuer</label><input type="text" class="modal-input w-input" maxlength="256" name="Education-Issuer" data-name="Education Issuer" placeholder="" id="Education-Issuer">
            <a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Credential</a>
        </div>
        </div>
    </div>`;
     $("#webflow_credentials").append(addCredentialSection);
}

function getCredentialCounters(){
    const Credentials = $("#webflow_credentials > .crendentials");
    const CredentialsCount = parseInt(Credentials.length);
    return CredentialsCount;
}

function Rerender_Crendentials_Section(CredentialCounters){
    var appendFile = ''
    var addCredentialSection = '';
    const crendentials = document.querySelectorAll('.crendentials');
    crendentials.forEach(crendential => {
        crendential.remove();
    });
    for (var k = 0 ; k < CredentialCounters; k++){
        addCredentialSection += `
            <div class="w-layout-grid profile-add crendentials">
                <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db5-25be96d7" class="w-layout-grid profile-add-row">
                <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db6-25be96d7" class="profile-add-row-column">
                    <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db7-25be96d7">`+ (k + 2) +`</div>
                </div>
                <div id="w-node-fd5f3992-2c7f-76a2-4117-70a223359db9-25be96d7" class="quiz-builder-question"><label for="Education-Credential" class="modal-input-label-copy">Credential</label><input type="text" class="modal-input w-input" maxlength="256" name="Education-Credential" data-name="Education Credential" placeholder="" id="Education-Credential"><label for="Education-Issuer" class="modal-input-label">Issuer</label><input type="text" class="modal-input w-input" maxlength="256" name="Education-Issuer" data-name="Education Issuer" placeholder="" id="Education-Issuer">
                    <a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Credential</a>
                </div>
                </div>
            </div>`;
    }
    appendFile += addCredentialSection;
    $("#webflow_credentials").append(appendFile);
}


function getEmploymentCounters(){
    const Employments = $("#webflow_employments > .employment");
    const EmploymentsCount = parseInt(Employments.length);
    return EmploymentsCount;
}


function Add_Employment(employmentCount) {
    var addEmploymentSection = '';
    addEmploymentSection = `
    <div class="w-layout-grid profile-add employment">
        <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e57-25be96d7" class="w-layout-grid profile-add-row">
        <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e58-25be96d7" class="profile-add-row-column">
            <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e59-25be96d7"> `+ ( employmentCount + 2)+`</div>
        </div>
        <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e5b-25be96d7" class="quiz-builder-question"><label for="Employer-Name-2" class="modal-input-label-copy">Employer</label><input type="text" class="modal-input w-input" maxlength="256" name="Employer-Name" data-name="Employer Name" placeholder="" id="Employer-Name-2"><label for="Employment-Position" class="modal-input-label">Position</label><input type="text" class="modal-input w-input" maxlength="256" name="Employment-Position" data-name="Employment Position" placeholder="" id="Employment-Position"><label for="Address-2" class="modal-input-label">Start Date</label>
            <div class="html-embed-3 w-embed"><input type="datetime-local" id="meeting-time" name="meeting-time" value="2022-01-01T00:00" min="2022-01-01T00:00" class="modal-input"></div><label for="Address-2" class="modal-input-label">End Date</label>
            <div class="html-embed-3 w-embed"><input type="datetime-local" id="meeting-time" name="meeting-time" value="2022-01-01T00:00" min="2022-01-01T00:00" class="modal-input">
            <input type="checkbox"> Current
            </div><label for="Address-2" class="modal-input-label">Address</label><input type="text" class="modal-input w-input" maxlength="256" name="Address" data-name="Address" placeholder="" id="Address-2">
            <a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Employment</a>
        </div>
        </div>
    </div>`;
     $("#webflow_employments").append(addEmploymentSection);
}


function Rerender_Employments_Section(employmentCount){
    var appendFile = ''
    var addEmploymentSection = '';
    const employments = document.querySelectorAll('.employment');
    employments.forEach(employment => {
        employment.remove();
    });
    for (var k = 0 ; k < employmentCount; k++){
        addEmploymentSection += `
        <div class="w-layout-grid profile-add employment">
            <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e57-25be96d7" class="w-layout-grid profile-add-row">
                <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e58-25be96d7" class="profile-add-row-column">
                    <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e59-25be96d7"> `+ ( k + 2)+`</div>
                </div>
                <div id="w-node-b23da42d-bbee-cce0-8a20-97c43f455e5b-25be96d7" class="quiz-builder-question"><label for="Employer-Name-2" class="modal-input-label-copy">Employer</label><input type="text" class="modal-input w-input" maxlength="256" name="Employer-Name" data-name="Employer Name" placeholder="" id="Employer-Name-2"><label for="Employment-Position" class="modal-input-label">Position</label><input type="text" class="modal-input w-input" maxlength="256" name="Employment-Position" data-name="Employment Position" placeholder="" id="Employment-Position"><label for="Address-2" class="modal-input-label">Start Date</label>
                    <div class="html-embed-3 w-embed"><input type="datetime-local" id="meeting-time" name="meeting-time" value="2022-01-01T00:00" min="2022-01-01T00:00" class="modal-input"></div><label for="Address-2" class="modal-input-label">End Date</label>
                    <div class="html-embed-3 w-embed"><input type="datetime-local" id="meeting-time" name="meeting-time" value="2022-01-01T00:00" min="2022-01-01T00:00" class="modal-input">
                    <input type="checkbox"> Current
                    </div><label for="Address-2" class="modal-input-label">Address</label><input type="text" class="modal-input w-input" maxlength="256" name="Address" data-name="Address" placeholder="" id="Address-2">
                    <a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Employment</a>
                </div>
            </div>
        </div>`;
    }
    appendFile += addEmploymentSection;
    $("#webflow_employments").append(appendFile);
}


function getReferenceCounters(){
    const References = $("#webflow_references > .references");
    const ReferencesCount = parseInt(References.length);
    return ReferencesCount;
}

function Add_References(referenceCount){

    var addReferenceSection = '';
    addReferenceSection = `
        <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac143-25be96d7" class="w-layout-grid profile-add-row references">
            <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac144-25be96d7" class="profile-add-row-column">
            <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac145-25be96d7">`+ (referenceCount + 2) +`</div>
            </div>
            <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac147-25be96d7" class="quiz-builder-question"><label for="Employer-Name-3" class="modal-input-label-copy">Full Name</label><input type="text" class="modal-input w-input" maxlength="256" name="Employer-Name-3" data-name="Employer Name 3" placeholder="" id="Employer-Name-3"><label for="Employment-Position-2" class="modal-input-label">Relationship</label><input type="text" class="modal-input w-input" maxlength="256" name="Employment-Position-2" data-name="Employment Position 2" placeholder="" id="Employment-Position-2"><label for="Employment-Position-3" class="modal-input-label">Phone
                Number</label><input type="text" class="modal-input w-input" maxlength="256" name="Employment-Position-2" data-name="Employment Position 2" placeholder="" id="Employment-Position-2">
                <a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Reference</a>
            </div>
        </div>`;
     $("#webflow_references").append(addReferenceSection);
}

function Rerender_References_Section(referenceCount){
    var appendFile = ''
    var addReferenceSection = '';
    const references = document.querySelectorAll('.references');
    references.forEach(reference => {
        reference.remove();
    });
    for (var k = 0 ; k < referenceCount; k++){
        addReferenceSection += `
        <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac143-25be96d7" class="w-layout-grid profile-add-row references">
            <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac144-25be96d7" class="profile-add-row-column">
            <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac145-25be96d7">`+ (k + 2) +`</div>
            </div>
            <div id="w-node-a0048bd4-ca10-ef28-8f09-a607ee6ac147-25be96d7" class="quiz-builder-question"><label for="Employer-Name-3" class="modal-input-label-copy">Full Name</label><input type="text" class="modal-input w-input" maxlength="256" name="Employer-Name-3" data-name="Employer Name 3" placeholder="" id="Employer-Name-3"><label for="Employment-Position-2" class="modal-input-label">Relationship</label><input type="text" class="modal-input w-input" maxlength="256" name="Employment-Position-2" data-name="Employment Position 2" placeholder="" id="Employment-Position-2"><label for="Employment-Position-3" class="modal-input-label">Phone
                Number</label><input type="text" class="modal-input w-input" maxlength="256" name="Employment-Position-2" data-name="Employment Position 2" placeholder="" id="Employment-Position-2">
                <a href="#" class="button dashboard-body modal-button delete quiz w-button"><span class="inline-leading-icon"><strong></strong></span>Remove Reference</a>
            </div>
        </div>`;
    }
    appendFile += addReferenceSection;
    $("#webflow_references").append(appendFile);

}