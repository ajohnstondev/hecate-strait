$(document).ready(function () {

    $("#w-node-_0941d12c-eae9-33b6-8979-5d22a2baec9c-25be96d7").on('click', function () {
        var pass_skillcount = getQuizCounters();
        Add_Skills_Section(pass_skillcount);
    });
    $("#w-node-fd5f3992-2c7f-76a2-4117-70a223359dc0-25be96d7").on('click', function () {
        var CrendentialCount = getCredentialCounters();
        Add_Credential(CrendentialCount);
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