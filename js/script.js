// align text at center
let imgContainers = document.querySelectorAll('.row .imgContainer img')
let textContainer = document.querySelectorAll('.row .textContainer')

function alignText(){
    for (let i=0; i<imgContainers.length; i++) {
        let imgHeight = imgContainers[i].height;
        textContainer[i].style.height = imgHeight + 'px';
    }    
}

window.onload =() => { alignText() }
window.onresize = () => { alignText() };

// ------------change active navbar button--------------
let navBtns = document.querySelectorAll('.nav-link')
navBtns.forEach((item) => {
    item.addEventListener('click', () =>{
        var activeBtn = document.querySelector('.active');
        activeBtn.classList.remove('active');
        item.classList.add('active');
    });
})

var navSections = document.querySelectorAll('.nav-section')
const sectionObserverOptions = {
    threshold: 1,
    rootMargin: '100px 0px 0px 0px'
};

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
        
        for( let btn of navBtns) {
            if( ('#' + entry.target.id) == btn.getAttribute('href') ) {
                var activeBtn = document.querySelector('.active');
                activeBtn.classList.remove('active');

                btn.classList.add('active');
            }
        }
    })
}, sectionObserverOptions)

navSections.forEach(section => {
    sectionObserver.observe(section);
})

//-------------------Adding petroleum courses

class Course {
    constructor(CourseDate, name, center, description, website) {
        this.CourseDate = CourseDate,
        this.name = name,
        this.center = center,
        this.description = description,
        this.website = website
    }
}

let petroleumCourses =[];

const adn = new Course(
    'April 2019 - April 2019',
    'Measurements ADN-ECO',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Nuclear measurements, operations and applications of nuclear tools, handling radioactive (Gamma and Neutron) sources.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(adn);

const emp = new Course(
    'March 2019 - March 2019',
    'EMP Resistivity',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Operations and applications of electromagnetic propagation (EMP) tools, logs interpretation.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(emp);

const measurementsTS = new Course(
    'May 2018 - June 2018',
    'Measurements TS (Telescope)',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Measurements while drilling, Telescope (MWD) parts, programming, running tools, taking surveys, telemetry.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(measurementsTS);

const measurements0 = new Course(
    'April 2018 - MAy 2018',
    'Measurements-0',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Measurements while drilling, Surveying, telemetry, surface System, Sensors installation and calibration.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(measurements0);

const iwcf = new Course(
    'September 2017 - September 2017',
    'IWCF Level 1',
    'International Well Control Forum',
    'An Overview of Oil and Gas, Life Cycle of a Well, Drilling Rigs, Well Control During Drilling Operations, Well Intervention and Workover, Pressure Control During Well Intervention.',
    'https://www.iwcf.org/'
);
petroleumCourses.push(iwcf);

const da1 = new Course(
    'August 2016 - August 2016',
    'Data Analyst - 1',
    'Middle East Learning Center, Abu Dhabi, UAE',
    'Hydraulics, Mudlogging unit inspection list, Formation pressure, Overpressure (DExponent), Well monitoring, Site specific communication, well control, Drilling calculations, String buoyancy, Reporting, Leak of test, GNx explorer, Torque and drag model, Dual mast management, ML cabin startup.',
    'https://www.slb.com/'
);
petroleumCourses.push(da1);

const gasFundamentals = new Course(
    'February 2016 - February 2016',
    'Gas Fundamentals and Analysis',
    'European Learning Center (ELC), Melun, France',
    'Different gas types, Gas extractors and their properties, Monitor gas on the rig.',
    'https://www.slb.com/'
);
petroleumCourses.push(gasFundamentals);

const gssSensors = new Course(
    'February 2016 - February 2016',
    'GSS Sensors Calibration Validation Verification',
    'European Learning Center (ELC), Melun, France',
    'Different GSS sensors calibration verification and validation.',
    'https://www.slb.com/'
);
petroleumCourses.push(gssSensors);

const gn4 = new Course(
    'October 2014 - October 2014',
    'GSS-Acquisition System (GNX)',
    'Sugar Land Learning Center (SLC), Sugar Land, USA',
    'New acquisition system, InterAct, Wits, Business Management, Sensors Installations and Calibrations, Hardware and Software, Gas System Calibration.',
    'https://www.slb.com/'
);
petroleumCourses.push(gn4);

const ml1 = new Course(
    'August 2014 - August 2014',
    'Mud Logging - 1',
    'European Learning Center (ELC), Melun, France',
    'Mud Logger\'s Tasks and Responsibilities, Drilling Equipment and Techniques, Lag Time, Pressure Notions, Mud Logging Geology, Mudlog, Drilling Fluids, Hydrocarbon and Gas Detection, Drilling Parameters, Sensors, Unit Maintenance, H2S Awareness and Detection, Safety, Quality Control, Client Relations.',
    'https://www.slb.com/'
);
petroleumCourses.push(ml1);

let petroleumCoursesContainer = document.querySelector('.petroleumCourses')
petroleumCourses.forEach(course => {
    petroleumCoursesContainer.innerHTML += `
    <div class="col-md-6 col-sm-12 mt-3">
        <div class="education-block">
            <div class="education-date">
                ${course.CourseDate}
            </div>
            <h3 class="education-title">
                ${course.name}
            </h3>
            <p>
                <em>${course.center}</em><br>
                ${course.description}<br>
            </p>
        </div>
    </div>
    `
})

// --------display experience projects
let downArrow = document.querySelectorAll('.fa-angle-down');
let upArrow = document.querySelectorAll('.fa-angle-up');
let expProjectsDetails = document.querySelectorAll('.experience-details-block');

for(let i=0; i<expProjectsDetails.length; i++) {
    downArrow[i].onclick = function(){
        downArrow[i].style.display = 'none';
        upArrow[i].style.display = '';
        expProjectsDetails[i].style.display = 'block';
    }
    upArrow[i].onclick = function(){
        downArrow[i].style.display = '';
        upArrow[i].style.display = 'none';
        expProjectsDetails[i].style.display = 'none';
    }
}
