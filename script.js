/**
 * US Political Dashboard 2025
 * Interactive JavaScript functionality
 * 
 * Authors: Puppy Pilot & Anacondy
 * "For God and country - Geronimo" - Zero Dark Thirty
 * 
 * This script handles:
 * - SVG map rendering with political coloring
 * - State interactions (click, hover)
 * - Legislative data display
 * - Mobile touch event handling
 * - Security: XSS prevention via textContent
 */

// State data with political affiliation and legislative info
const stateData = {
    // Note: This is illustrative data for 2025
    CA: { name: 'California', capital: 'Sacramento', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 100, y: 340 },
    TX: { name: 'Texas', capital: 'Austin', governor: 'R', legislature: 'Republican', party: 'republican', x: 480, y: 420 },
    FL: { name: 'Florida', capital: 'Tallahassee', governor: 'R', legislature: 'Republican', party: 'republican', x: 780, y: 460 },
    NY: { name: 'New York', capital: 'Albany', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 840, y: 180 },
    PA: { name: 'Pennsylvania', capital: 'Harrisburg', governor: 'D', legislature: 'Split', party: 'neutral', x: 800, y: 240 },
    IL: { name: 'Illinois', capital: 'Springfield', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 640, y: 260 },
    OH: { name: 'Ohio', capital: 'Columbus', governor: 'R', legislature: 'Republican', party: 'republican', x: 720, y: 260 },
    GA: { name: 'Georgia', capital: 'Atlanta', governor: 'R', legislature: 'Republican', party: 'republican', x: 740, y: 410 },
    NC: { name: 'North Carolina', capital: 'Raleigh', governor: 'D', legislature: 'Republican', party: 'neutral', x: 780, y: 370 },
    MI: { name: 'Michigan', capital: 'Lansing', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 700, y: 200 },
    WA: { name: 'Washington', capital: 'Olympia', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 120, y: 100 },
    AZ: { name: 'Arizona', capital: 'Phoenix', governor: 'D', legislature: 'Republican', party: 'neutral', x: 200, y: 400 },
    MA: { name: 'Massachusetts', capital: 'Boston', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 880, y: 160 },
    TN: { name: 'Tennessee', capital: 'Nashville', governor: 'R', legislature: 'Republican', party: 'republican', x: 700, y: 350 },
    IN: { name: 'Indiana', capital: 'Indianapolis', governor: 'R', legislature: 'Republican', party: 'republican', x: 680, y: 280 },
    MO: { name: 'Missouri', capital: 'Jefferson City', governor: 'R', legislature: 'Republican', party: 'republican', x: 600, y: 310 },
    MD: { name: 'Maryland', capital: 'Annapolis', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 820, y: 280 },
    WI: { name: 'Wisconsin', capital: 'Madison', governor: 'D', legislature: 'Split', party: 'neutral', x: 640, y: 180 },
    CO: { name: 'Colorado', capital: 'Denver', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 360, y: 300 },
    MN: { name: 'Minnesota', capital: 'St. Paul', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 580, y: 140 },
    SC: { name: 'South Carolina', capital: 'Columbia', governor: 'R', legislature: 'Republican', party: 'republican', x: 770, y: 400 },
    AL: { name: 'Alabama', capital: 'Montgomery', governor: 'R', legislature: 'Republican', party: 'republican', x: 700, y: 420 },
    LA: { name: 'Louisiana', capital: 'Baton Rouge', governor: 'R', legislature: 'Republican', party: 'republican', x: 620, y: 460 },
    KY: { name: 'Kentucky', capital: 'Frankfort', governor: 'D', legislature: 'Republican', party: 'neutral', x: 720, y: 310 },
    OR: { name: 'Oregon', capital: 'Salem', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 110, y: 160 },
    OK: { name: 'Oklahoma', capital: 'Oklahoma City', governor: 'R', legislature: 'Republican', party: 'republican', x: 520, y: 370 },
    CT: { name: 'Connecticut', capital: 'Hartford', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 870, y: 180 },
    UT: { name: 'Utah', capital: 'Salt Lake City', governor: 'R', legislature: 'Republican', party: 'republican', x: 280, y: 270 },
    IA: { name: 'Iowa', capital: 'Des Moines', governor: 'R', legislature: 'Republican', party: 'republican', x: 580, y: 240 },
    NV: { name: 'Nevada', capital: 'Carson City', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 170, y: 290 },
    AR: { name: 'Arkansas', capital: 'Little Rock', governor: 'R', legislature: 'Republican', party: 'republican', x: 620, y: 370 },
    KS: { name: 'Kansas', capital: 'Topeka', governor: 'D', legislature: 'Republican', party: 'neutral', x: 520, y: 300 },
    NM: { name: 'New Mexico', capital: 'Santa Fe', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 340, y: 400 },
    NE: { name: 'Nebraska', capital: 'Lincoln', governor: 'R', legislature: 'Republican', party: 'republican', x: 500, y: 250 },
    WV: { name: 'West Virginia', capital: 'Charleston', governor: 'R', legislature: 'Republican', party: 'republican', x: 760, y: 300 },
    ID: { name: 'Idaho', capital: 'Boise', governor: 'R', legislature: 'Republican', party: 'republican', x: 220, y: 160 },
    HI: { name: 'Hawaii', capital: 'Honolulu', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 260, y: 530 },
    NH: { name: 'New Hampshire', capital: 'Concord', governor: 'R', legislature: 'Republican', party: 'republican', x: 880, y: 140 },
    ME: { name: 'Maine', capital: 'Augusta', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 900, y: 100 },
    RI: { name: 'Rhode Island', capital: 'Providence', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 890, y: 170 },
    MT: { name: 'Montana', capital: 'Helena', governor: 'R', legislature: 'Republican', party: 'republican', x: 320, y: 120 },
    DE: { name: 'Delaware', capital: 'Dover', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 830, y: 280 },
    SD: { name: 'South Dakota', capital: 'Pierre', governor: 'R', legislature: 'Republican', party: 'republican', x: 480, y: 180 },
    ND: { name: 'North Dakota', capital: 'Bismarck', governor: 'R', legislature: 'Republican', party: 'republican', x: 480, y: 120 },
    AK: { name: 'Alaska', capital: 'Juneau', governor: 'R', legislature: 'Republican', party: 'republican', x: 140, y: 530 },
    VT: { name: 'Vermont', capital: 'Montpelier', governor: 'R', legislature: 'Democrat', party: 'neutral', x: 870, y: 130 },
    WY: { name: 'Wyoming', capital: 'Cheyenne', governor: 'R', legislature: 'Republican', party: 'republican', x: 380, y: 220 },
    DC: { name: 'Washington DC', capital: 'Washington DC', governor: 'D', legislature: 'Democrat', party: 'democratic', x: 820, y: 290 }
};

// Simplified but more accurate state paths for better visual representation
// These paths create a more recognizable USA map shape
const statePaths = {
    CA: 'M 50,250 L 100,220 L 140,240 L 150,280 L 160,340 L 170,400 L 150,440 L 120,450 L 90,440 L 70,400 L 60,350 L 50,300 Z',
    TX: 'M 400,340 L 500,340 L 540,360 L 560,400 L 560,450 L 540,490 L 500,500 L 440,500 L 400,490 L 380,450 L 390,400 L 390,360 Z',
    FL: 'M 740,420 L 780,420 L 810,440 L 830,480 L 820,510 L 800,520 L 770,515 L 750,500 L 730,470 L 720,440 Z',
    NY: 'M 800,150 L 860,145 L 880,160 L 885,185 L 880,210 L 850,225 L 810,230 L 790,215 L 780,185 L 785,160 Z',
    PA: 'M 760,210 L 830,210 L 845,230 L 840,255 L 810,270 L 770,275 L 750,260 L 745,235 Z',
    IL: 'M 610,220 L 655,220 L 670,250 L 675,290 L 665,320 L 630,330 L 605,320 L 595,280 L 600,245 Z',
    OH: 'M 690,220 L 740,220 L 755,245 L 755,275 L 735,295 L 700,300 L 680,285 L 675,250 Z',
    GA: 'M 715,370 L 760,370 L 775,395 L 780,430 L 770,455 L 740,465 L 710,455 L 695,425 L 690,390 Z',
    NC: 'M 740,340 L 810,340 L 830,360 L 835,385 L 820,405 L 775,410 L 745,395 L 720,370 Z',
    MI: 'M 670,150 L 720,145 L 740,165 L 745,195 L 740,220 L 710,235 L 680,230 L 660,210 L 655,180 Z',
    WA: 'M 70,60 L 160,60 L 175,85 L 180,125 L 160,140 L 110,145 L 70,135 L 55,105 Z',
    AZ: 'M 160,360 L 230,360 L 245,390 L 250,430 L 230,445 L 190,440 L 160,420 L 150,385 Z',
    MA: 'M 850,140 L 900,135 L 915,150 L 920,170 L 905,185 L 870,190 L 850,175 Z',
    TN: 'M 660,320 L 740,320 L 755,340 L 755,370 L 730,385 L 680,380 L 650,365 L 640,340 Z',
    IN: 'M 660,250 L 700,250 L 715,275 L 715,305 L 695,325 L 665,330 L 650,310 L 645,280 Z',
    MO: 'M 560,270 L 625,270 L 640,295 L 640,335 L 615,355 L 575,360 L 550,345 L 540,315 L 545,290 Z',
    MD: 'M 790,260 L 840,260 L 855,275 L 850,300 L 820,315 L 790,310 L 775,290 Z',
    WI: 'M 610,140 L 660,135 L 680,155 L 685,190 L 680,220 L 650,235 L 615,230 L 595,205 L 590,170 Z',
    CO: 'M 320,260 L 400,260 L 415,290 L 420,330 L 395,345 L 345,350 L 310,340 L 300,310 Z',
    MN: 'M 540,90 L 605,85 L 625,105 L 635,145 L 630,180 L 600,195 L 555,190 L 530,170 L 520,130 Z',
    SC: 'M 740,370 L 790,370 L 805,390 L 805,420 L 785,440 L 755,445 L 735,425 L 725,395 Z',
    AL: 'M 680,380 L 720,380 L 735,405 L 735,445 L 715,465 L 685,470 L 665,450 L 660,415 Z',
    LA: 'M 580,420 L 640,420 L 660,445 L 665,480 L 645,500 L 605,505 L 575,495 L 560,465 Z',
    KY: 'M 670,290 L 730,290 L 745,310 L 745,335 L 720,350 L 680,345 L 655,330 Z',
    OR: 'M 60,120 L 150,115 L 165,140 L 170,180 L 150,200 L 100,205 L 65,195 L 50,165 Z',
    OK: 'M 480,330 L 560,330 L 575,355 L 580,390 L 560,410 L 515,415 L 485,400 L 465,370 Z',
    CT: 'M 855,165 L 885,165 L 895,180 L 890,200 L 870,210 L 855,195 Z',
    UT: 'M 240,230 L 310,230 L 325,260 L 330,305 L 305,320 L 265,320 L 235,305 L 225,270 Z',
    IA: 'M 550,210 L 605,210 L 620,230 L 620,265 L 595,285 L 555,285 L 535,265 L 530,235 Z',
    NV: 'M 140,250 L 210,250 L 225,280 L 230,330 L 205,350 L 165,345 L 140,320 L 130,280 Z',
    AR: 'M 590,340 L 640,340 L 655,365 L 655,395 L 630,415 L 595,415 L 575,395 L 570,365 Z',
    KS: 'M 480,270 L 550,270 L 565,295 L 565,325 L 540,345 L 495,345 L 475,325 L 470,295 Z',
    NM: 'M 300,360 L 370,360 L 385,390 L 390,435 L 365,450 L 320,450 L 295,430 L 285,395 Z',
    NE: 'M 460,220 L 530,220 L 545,245 L 545,280 L 520,300 L 475,300 L 455,280 L 450,250 Z',
    WV: 'M 740,270 L 780,270 L 795,290 L 790,320 L 765,335 L 735,330 L 720,310 Z',
    ID: 'M 180,120 L 260,115 L 280,140 L 290,180 L 275,210 L 235,215 L 195,205 L 175,175 Z',
    HI: 'M 230,510 L 290,510 L 305,525 L 300,545 L 275,555 L 235,550 L 220,535 Z',
    NH: 'M 865,120 L 895,115 L 905,130 L 900,155 L 880,170 L 865,160 Z',
    ME: 'M 885,65 L 925,60 L 940,80 L 945,115 L 925,135 L 895,140 L 875,120 L 870,90 Z',
    RI: 'M 880,160 L 905,160 L 915,172 L 910,188 L 890,196 L 880,185 Z',
    MT: 'M 280,75 L 380,70 L 400,95 L 410,140 L 390,160 L 330,165 L 280,155 L 260,125 Z',
    DE: 'M 815,265 L 840,265 L 850,280 L 845,300 L 830,310 L 815,300 Z',
    SD: 'M 440,150 L 510,145 L 525,170 L 530,205 L 505,225 L 455,225 L 435,205 L 430,175 Z',
    ND: 'M 440,85 L 510,80 L 525,105 L 530,140 L 505,160 L 455,160 L 435,140 L 430,110 Z',
    AK: 'M 100,500 L 170,495 L 185,515 L 180,540 L 155,555 L 110,555 L 90,540 L 85,520 Z',
    VT: 'M 855,110 L 880,105 L 890,120 L 885,145 L 870,160 L 855,150 Z',
    WY: 'M 340,180 L 420,175 L 435,200 L 440,240 L 415,260 L 365,265 L 335,245 L 325,215 Z',
    DC: 'M 812,283 L 825,283 L 832,290 L 827,302 L 815,306 L 808,298 Z'
};

// Currently selected state
let selectedState = null;

/**
 * Initialize the map when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    renderMap();
    setupEventListeners();
    addTouchSupport();
});

/**
 * Render the SVG map with all states and political coloring
 */
function renderMap() {
    const svg = document.getElementById('usa-map');
    
    // Clear existing content
    svg.innerHTML = '';
    
    // Create background
    const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    background.setAttribute('width', '100%');
    background.setAttribute('height', '100%');
    background.setAttribute('fill', '#1a1a1a');
    svg.appendChild(background);
    
    // Create states group
    const statesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    statesGroup.setAttribute('id', 'states-group');
    
    // Render each state with political coloring
    for (const [code, pathData] of Object.entries(statePaths)) {
        const stateInfo = stateData[code];
        if (!stateInfo) continue;
        
        // Create path element
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('class', `state ${stateInfo.party}`);
        path.setAttribute('data-state', code);
        path.setAttribute('id', `state-${code}`);
        
        // Accessibility attributes
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', stateInfo.name);
        path.setAttribute('tabindex', '0');
        
        statesGroup.appendChild(path);
        
        // Add state label
        if (stateInfo.x && stateInfo.y) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', stateInfo.x);
            text.setAttribute('y', stateInfo.y);
            text.setAttribute('class', 'state-label');
            text.textContent = code;
            statesGroup.appendChild(text);
        }
    }
    
    svg.appendChild(statesGroup);
}

/**
 * Setup event listeners for state interactions
 */
function setupEventListeners() {
    const states = document.querySelectorAll('.state');
    
    states.forEach(state => {
        // Click/tap event
        state.addEventListener('click', function(e) {
            handleStateClick(this);
        });
        
        // Keyboard navigation
        state.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleStateClick(this);
            }
        });
    });
}

/**
 * Handle state selection
 * @param {Element} stateElement - The clicked state SVG element
 */
function handleStateClick(stateElement) {
    const stateCode = stateElement.getAttribute('data-state');
    const data = stateData[stateCode];
    
    if (!data || !stateCode) {
        console.error('Invalid state selection');
        return;
    }
    
    // Remove selected class from previous state
    if (selectedState) {
        selectedState.classList.remove('selected');
    }
    
    // Add selected class to new state
    stateElement.classList.add('selected');
    selectedState = stateElement;
    
    // Update info panel
    updateInfoPanel(data);
    
    // Haptic feedback for mobile
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

/**
 * Update the information panel with state data
 * Uses textContent to prevent XSS attacks
 * @param {Object} data - State data object
 */
function updateInfoPanel(data) {
    // Update DOM elements - textContent automatically prevents XSS
    document.getElementById('state-name').textContent = data.name;
    document.getElementById('state-info').textContent = `View ${data.name} legislative composition`;
    document.getElementById('state-capital').textContent = data.capital;
    document.getElementById('state-governor').textContent = data.governor === 'D' ? 'Democrat' : 'Republican';
    document.getElementById('state-legislature').textContent = data.legislature;
    
    // Smooth scroll on mobile
    if (window.innerWidth < 768) {
        const infoPanel = document.querySelector('.info-panel');
        if (infoPanel) {
            infoPanel.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }
    }
}

/**
 * Add touch support optimizations for mobile devices
 */
function addTouchSupport() {
    const svg = document.getElementById('usa-map');
    let lastTap = 0;
    
    // Prevent double-tap zoom
    svg.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
            e.preventDefault();
        }
        
        lastTap = currentTime;
    }, { passive: false });
}

/**
 * Handle viewport resize events
 */
window.addEventListener('resize', function() {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(function() {
        console.log('Viewport resized - map adjusting');
    }, 250);
});

/**
 * Handle orientation change
 */
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        console.log('Orientation changed');
    }, 100);
});

// Security: Disable context menu on map
document.getElementById('usa-map')?.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Log initialization
console.log('US Political Dashboard initialized');
console.log('Authors: Puppy Pilot & Anacondy');
console.log('"For God and country" - Zero Dark Thirty');
