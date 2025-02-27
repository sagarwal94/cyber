import React, { useState } from 'react';
import './App.css';

function Profile() {
  const [expandedSections, setExpandedSections] = useState({
    personalDetails: true,
    academicInfo: false,
    financialInfo: false,
    documentsInfo: false
  });
  
  const [activeTab, setActiveTab] = useState('GENERAL INFORMATION');
  
  const studentData = {
    studentNumber: '2420099',
    name: 'Siva Abishikth',
    lastName: 'Mylavarapu',
    studentStatus: 'Current',
    semesterStatus: 'Current',
    cgpa: '0.00',
    applicationNumber: 'APP-0016268',
    curriculum: '2024-2025-MS in Artificial Intelligence Engineering',
    class: 'Graduate',
    registrationDate: '12/26/2024',
    registrationSemester: '2024-2025, Spring',
    email: 'siva.abishikth@mail.bau.edu',
    phone: '+90 555 123 4567',
    address: '123 Student Housing, Istanbul, Turkey',
    nationality: 'Indian',
    passportNumber: 'A12345678',
    dateOfBirth: '17/05/1998',
    gender: 'Male'
  };
  
  const personalDetailsTabs = [
    'GENERAL INFORMATION',
    'IDENTITY INFORMATION',
    'INTERNATIONAL STUDENT',
    'ADDRESS INFORMATION',
    'DISABILITY SERVICES',
    'UNIVERSITY INFORMATION',
    'CONTACT INFORMATION',
    'PREVIOUS EDUCATION INFORMATION',
    'DOCUMENTS',
    'MISSING DOCUMENTS'
  ];
  
  const academicTabs = [
    'CURRENT COURSES',
    'ACADEMIC HISTORY',
    'GRADES',
    'TRANSCRIPTS',
    'DEGREE PROGRESS'
  ];
  
  const financialTabs = [
    'TUITION FEES',
    'PAYMENTS',
    'FINANCIAL AID',
    'SCHOLARSHIPS'
  ];
  
  const documentsTabs = [
    'UPLOADED DOCUMENTS',
    'PENDING DOCUMENTS',
    'DOCUMENT REQUESTS'
  ];
  
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  // Helper function to render tab sidebar
  const renderTabSidebar = (tabs) => {
    return (
      <div className="tabs-sidebar">
        {tabs.map(tab => (
          <div 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  };
  
  // Helper function to render general information tab content
  const renderGeneralInfoTab = () => {
    return (
      <div className="general-info">
        <div className="info-section">
          <h4>Student Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Student Number</label>
              <div className="info-value">{studentData.studentNumber}</div>
            </div>
            <div className="info-item">
              <label>Name</label>
              <div className="info-value">{studentData.name}</div>
            </div>
            <div className="info-item">
              <label>Last Name</label>
              <div className="info-value">{studentData.lastName}</div>
            </div>
            <div className="info-item">
              <label>Student Status</label>
              <div className="info-value">{studentData.studentStatus}</div>
            </div>
            <div className="info-item">
              <label>Semester Status</label>
              <div className="info-value">{studentData.semesterStatus}</div>
            </div>
            <div className="info-item">
              <label>CGPA</label>
              <div className="info-value">{studentData.cgpa}</div>
            </div>
            <div className="info-item">
              <label>Application Number</label>
              <div className="info-value">{studentData.applicationNumber}</div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <h4>University Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Affiliated Curriculum</label>
              <div className="info-value">{studentData.curriculum}</div>
            </div>
            <div className="info-item">
              <label>Class</label>
              <div className="info-value">{studentData.class}</div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <h4>Registration Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Registration Date</label>
              <div className="info-value">{studentData.registrationDate}</div>
            </div>
            <div className="info-item">
              <label>Registration Semester</label>
              <div className="info-value">{studentData.registrationSemester}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Helper function to render identity information tab content
  const renderIdentityInfoTab = () => {
    return (
      <div className="identity-info">
        <div className="info-section">
          <h4>Personal Identity</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Nationality</label>
              <div className="info-value">{studentData.nationality}</div>
            </div>
            <div className="info-item">
              <label>Passport Number</label>
              <div className="info-value">{studentData.passportNumber}</div>
            </div>
            <div className="info-item">
              <label>Date of Birth</label>
              <div className="info-value">{studentData.dateOfBirth}</div>
            </div>
            <div className="info-item">
              <label>Gender</label>
              <div className="info-value">{studentData.gender}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render contact information tab content
  const renderContactInfoTab = () => {
    return (
      <div className="contact-info">
        <div className="info-section">
          <h4>Contact Details</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Email Address</label>
              <div className="info-value">{studentData.email}</div>
            </div>
            <div className="info-item">
              <label>Phone Number</label>
              <div className="info-value">{studentData.phone}</div>
            </div>
            <div className="info-item">
              <label>Current Address</label>
              <div className="info-value">{studentData.address}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Helper function to render international student tab content
  const renderInternationalStudentTab = () => {
    return (
      <div className="international-info">
        <div className="info-section">
          <h4>International Student Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Visa Type</label>
              <div className="info-value">Student Visa</div>
            </div>
            <div className="info-item">
              <label>Visa Expiry Date</label>
              <div className="info-value">10/12/2025</div>
            </div>
            <div className="info-item">
              <label>Residence Permit Number</label>
              <div className="info-value">RP98765432</div>
            </div>
            <div className="info-item">
              <label>Foreign ID Number</label>
              <div className="info-value">99123456789</div>
            </div>
          </div>
        </div>
        <div className="info-section">
          <h4>Home Country Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Home Address</label>
              <div className="info-value">123 Main St, Chennai, India</div>
            </div>
            <div className="info-item">
              <label>Emergency Contact</label>
              <div className="info-value">+91 98765 43210</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render address information tab content
  const renderAddressInfoTab = () => {
    return (
      <div className="address-info">
        <div className="info-section">
          <h4>Current Address</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Street Address</label>
              <div className="info-value">123 Student Housing</div>
            </div>
            <div className="info-item">
              <label>District</label>
              <div className="info-value">Beşiktaş</div>
            </div>
            <div className="info-item">
              <label>City</label>
              <div className="info-value">Istanbul</div>
            </div>
            <div className="info-item">
              <label>Postal Code</label>
              <div className="info-value">34349</div>
            </div>
            <div className="info-item">
              <label>Country</label>
              <div className="info-value">Turkey</div>
            </div>
          </div>
        </div>
        <div className="info-section">
          <h4>Permanent Address</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Street Address</label>
              <div className="info-value">123 Main St</div>
            </div>
            <div className="info-item">
              <label>District</label>
              <div className="info-value">Central</div>
            </div>
            <div className="info-item">
              <label>City</label>
              <div className="info-value">Chennai</div>
            </div>
            <div className="info-item">
              <label>Postal Code</label>
              <div className="info-value">600001</div>
            </div>
            <div className="info-item">
              <label>Country</label>
              <div className="info-value">India</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render university information tab content
  const renderUniversityInfoTab = () => {
    return (
      <div className="university-info">
        <div className="info-section">
          <h4>Academic Program</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Faculty</label>
              <div className="info-value">Faculty of Engineering and Natural Sciences</div>
            </div>
            <div className="info-item">
              <label>Department</label>
              <div className="info-value">Computer Engineering</div>
            </div>
            <div className="info-item">
              <label>Program</label>
              <div className="info-value">MS in Artificial Intelligence Engineering</div>
            </div>
            <div className="info-item">
              <label>Academic Year</label>
              <div className="info-value">2024-2025</div>
            </div>
            <div className="info-item">
              <label>Academic Advisor</label>
              <div className="info-value">Prof. Dr. Ahmet Yılmaz</div>
            </div>
            <div className="info-item">
              <label>Advisor Email</label>
              <div className="info-value">ahmet.yilmaz@bau.edu</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render documents tab content
  const renderDocumentsTab = () => {
    return (
      <div className="documents-info">
        <div className="info-section">
          <h4>Uploaded Documents</h4>
          <table className="documents-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Upload Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Passport.pdf</td>
                <td>15/12/2024</td>
                <td><span className="status-approved">Approved</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>TranscriptUG.pdf</td>
                <td>15/12/2024</td>
                <td><span className="status-approved">Approved</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>EnglishProficiency.pdf</td>
                <td>15/12/2024</td>
                <td><span className="status-approved">Approved</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>CV.pdf</td>
                <td>15/12/2024</td>
                <td><span className="status-pending">Pending</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Helper function to render previous education tab content
  const renderPrevEducationTab = () => {
    return (
      <div className="prev-education-info">
        <div className="info-section">
          <h4>Undergraduate Education</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>University</label>
              <div className="info-value">Anna University</div>
            </div>
            <div className="info-item">
              <label>Faculty/School</label>
              <div className="info-value">College of Engineering</div>
            </div>
            <div className="info-item">
              <label>Degree Program</label>
              <div className="info-value">Bachelor of Technology</div>
            </div>
            <div className="info-item">
              <label>Field of Study</label>
              <div className="info-value">Computer Science and Engineering</div>
            </div>
            <div className="info-item">
              <label>Graduation Date</label>
              <div className="info-value">05/2023</div>
            </div>
            <div className="info-item">
              <label>GPA</label>
              <div className="info-value">9.2/10.0</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render current courses tab content for Academic section
  const renderCurrentCoursesTab = () => {
    return (
      <div className="current-courses-info">
        <div className="info-section">
          <h4>Spring Semester 2025 Courses</h4>
          <table className="courses-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Instructor</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI501</td>
                <td>Advanced Machine Learning</td>
                <td>3</td>
                <td>Dr. Mehmet Kahraman</td>
                <td>Mon 10:00-12:50</td>
              </tr>
              <tr>
                <td>AI502</td>
                <td>Deep Learning Applications</td>
                <td>3</td>
                <td>Dr. Ayşe Yılmaz</td>
                <td>Tue 13:00-15:50</td>
              </tr>
              <tr>
                <td>AI503</td>
                <td>Natural Language Processing</td>
                <td>3</td>
                <td>Dr. Can Özmen</td>
                <td>Wed 10:00-12:50</td>
              </tr>
              <tr>
                <td>AI504</td>
                <td>AI Ethics and Society</td>
                <td>2</td>
                <td>Dr. Deniz Kaya</td>
                <td>Thu 15:00-16:50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Helper function to render tuition fees tab content for Financial section
  const renderTuitionFeesTab = () => {
    return (
      <div className="tuition-fees-info">
        <div className="info-section">
          <h4>Spring Semester 2025 Fees</h4>
          <table className="fees-table">
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuition Fee</td>
                <td>₺30,000</td>
                <td>15/01/2025</td>
                <td><span className="status-paid">Paid</span></td>
              </tr>
              <tr>
                <td>Registration Fee</td>
                <td>₺2,500</td>
                <td>15/01/2025</td>
                <td><span className="status-paid">Paid</span></td>
              </tr>
              <tr>
                <td>Student Services Fee</td>
                <td>₺1,500</td>
                <td>15/01/2025</td>
                <td><span className="status-paid">Paid</span></td>
              </tr>
              <tr>
                <td>Library Access Fee</td>
                <td>₺500</td>
                <td>15/01/2025</td>
                <td><span className="status-unpaid">Unpaid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-section">
          <h4>Payment Summary</h4>
          <div className="info-grid">
            <div className="info-item">
              <label>Total Fees</label>
              <div className="info-value">₺34,500</div>
            </div>
            <div className="info-item">
              <label>Amount Paid</label>
              <div className="info-value">₺34,000</div>
            </div>
            <div className="info-item">
              <label>Outstanding Balance</label>
              <div className="info-value">₺500</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render tab content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'GENERAL INFORMATION':
        return renderGeneralInfoTab();
      case 'IDENTITY INFORMATION':
        return renderIdentityInfoTab();
      case 'CONTACT INFORMATION':
        return renderContactInfoTab();
      case 'INTERNATIONAL STUDENT':
        return renderInternationalStudentTab();
      case 'ADDRESS INFORMATION':
        return renderAddressInfoTab();
      case 'UNIVERSITY INFORMATION':
        return renderUniversityInfoTab();
      case 'DOCUMENTS':
        return renderDocumentsTab();
      case 'PREVIOUS EDUCATION INFORMATION':
        return renderPrevEducationTab();
      case 'CURRENT COURSES':
        return renderCurrentCoursesTab();
      case 'TUITION FEES':
        return renderTuitionFeesTab();
      default:
        return (
          <div className="tab-placeholder">
            <p>Content for {activeTab} tab would display here.</p>
          </div>
        );
    }
  };
  
  // Helper function to render a section
  const renderSection = (title, isExpanded, tabsToRender, contentToRender) => {
    return (
      <div className="profile-section">
        <div className="section-header" onClick={() => toggleSection(title.toLowerCase().replace(/\s+/g, ''))}>
          <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>&#9662;</span>
          <span className="section-title">{title}</span>
        </div>
        
        {isExpanded && (
          <div className="section-content">
            <div className="tabs-container">
              {renderTabSidebar(tabsToRender)}
              
              <div className="tab-content">
                <h3 className="tab-title">{activeTab}</h3>
                {contentToRender()}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="student-profile">
      <div className="profile-header">
        <h1 className="profile-title">STUDENT PROFILE</h1>
        <div className="profile-divider"></div>
        
        <div className="profile-summary">
          <div className="profile-photo">
            <img src="/api/placeholder/120/120" alt="Student" />
            <button className="upload-photo-btn">Change Photo</button>
          </div>
          <div className="profile-info">
            <h2>{studentData.name} {studentData.lastName}</h2>
            <p className="student-id">Student ID: {studentData.studentNumber}</p>
            <p className="program">{studentData.curriculum}</p>
          </div>
        </div>
      </div>
      
      {renderSection(
        "Personal Details", 
        expandedSections.personalDetails, 
        personalDetailsTabs, 
        renderTabContent
      )}
      
      {renderSection(
        "Academic Information", 
        expandedSections.academicInfo, 
        academicTabs, 
        renderTabContent
      )}
      
      {renderSection(
        "Financial Information", 
        expandedSections.financialInfo, 
        financialTabs, 
        renderTabContent
      )}
      
      {renderSection(
        "Documents", 
        expandedSections.documentsInfo, 
        documentsTabs, 
        renderTabContent
      )}
    </div>
  );
}

export default Profile;