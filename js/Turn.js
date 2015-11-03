/* Turn.js
 * JavaScript file for handling the turns a player has
 * Made on 25-09-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * rollDice()
 */

////////////////
// rollDice() //
////////////////

// Function to simulate rolling a 6-sized dice

function rollDice() {
	// Set the variable
	var d6;

	// Generate the number between 1 and 6
	d6 = Math.floor((Math.random() * 6) + 1);

	// Return the number
	return d6;
}

/////////////////////////////
// getQuestion(questionID) //
/////////////////////////////

function getQuestion(questionID) {
	// Set variables
	var question = new Object();
	var questionProperties = [
		[
			"Question ID",
			"Question",
			"Question Colour",
			"Question Answer",
			"Question Feature Class"
		],
		[
			0, // could also be "Start"
			"<br/> You are about to enter RUFshire and make a journey into its rural urban fringe. <br/> <br/> a) With reference to your current work and residential ocations identify a similar area in RUFSHIRE that provides the best fit. <br/> <br/> b) Use these locations as you journey through the board and answer questions.",
			"yellow",
			"",
			"Polygon"
		],
		[
			1, 
			"<br/> A City Council Grant of £80,000 is available for a new communityinitiated project. The conditions were: to provide something of social, economic and environmental benefit to the city; engage local citizens; and require to be low-cost maintenance for the Council. Which of the following four bids on the final short-list would you vote for and why? <br/> <br/> a) Getting a community orchard and food-growing projects going across the city using 1/5 of space in existing council parks. <br/> b) Establishing a car-boot sale pitch and community cafe in one of the socially disadvantaged suburbs of the city. <br/> c) Creating a peri-urban woodland using predominantly native tree and shrub species on 4 acres of derelict Council Warehousing land on the city fringe. <br/> d) Providing renewable energy through a single wind turbine which will be community owned.", 
			"orange",
			"",
			""
		],
		[
			2, 
			"<br/> Local residents are seeking your support for a community hall with car park for meetings and other community pursuits including a small sports hall and 2 start-up units for local businesses. The present inhabitants do not have any community facilities nearby apart from access to a room in a local school, outside school hours, seating 30. However some residents are concerned that the building will take up valuable green space in the square. What is your opinion on the merits of the development?",
			"blue",
			"",
			""
		],
		[
			3, 
			"<br/> You are walking within this area and notice that a few residents are on site creating a flower display and they have placed a small wooden bench on a grass verge. The grass verge has also been dug up. You ask them why they are doing this on Council owned land. The residents explain that they are a community gardening group who wish to cultivate the under-used grass verges and green space in the area, due to the impossibility of securing allotment spaces managed by the local authority. What is your response?",
			"green",
			"",
			""
		],
		[
			4, 
			"<br/> This area has been identified as a potential site for new housing development in the consultation draft of the local plan. The future inhabitants will share services (schools, retail, church and community) with existing developments east of square 3. At present the site is disconnected from these due to the barrier of the main road. How can the development be made more viable or are there alternative better locations?",
			"blue",
			"",
			""
		],
		[
			5, 
			"<br/> The Government has recently designated a Special Area of Conservation (SAC) in this area (great crested newts and semiancient natural oak woodland). Management solutions to protect the conservation interest of the site are required. What would be your favoured strategy? <br/> <br/> a) Fence the area off and have public access restricted by permit <br/> b) Identify and build one path through the reserve which allows restricted access only <br/> c) Have free access but use local community volunteers to manage the reserve and access <br/> d) Allow unrestricted public access <br/> e) Other option (please explain)",  
			"blue",
			"",
			""
		],
		[
			6, 
			"<br/> A planning application for 400 houses has been submitted as phase 3 of a development on the outskirts of RUFhampton (currently brownfield land). The area is zoned for housing development. Given the close proximity of the Special Area of Conservation (SAC) please indicate on your map how do you think this development should proceed whilst minimizing the impact on the SAC. Refusing the application is not an option as it conforms to all relevant local and national policies.",  
			"purple",
			"",
			""
		],
		[
			7, 
			"<br/> The pressures for development in this area are very high. In your opinion are there any key features that you would conserve?", 
			"green",
			"",
			""
		],
		[
			8, 
			"<br/> A local landowner is seeking your views on the development of a former quarry, which is currently restored to a lake. What option would you favour and why? <br/> <br/> a) Develop the recreation potential of the lake <br/> b) Develop the lake for conservation uses <br/> c) Create a small holiday village development around the lake <br/> d) Develop luxury executive housing around the lake <br/> e) Other option (please explain)", 
			"orange",
			"",
			""
		],
		[
			9, 
			"<br/> A new industrial estate 20hectares for light industrial use in green belt land is supported by RUFhampton Council within the URF District Council's area. The proposal is driven by the wider economic needs of the city region and lack of large alternative brownfield sites. Which option would you support and why? <br/> <br/> a) Reject proposal: suggest developing 2-3 smaller industrial estates in surrounding villages <br/> b) Proceed with proposal but make it a low-carbon flagship project of national importance with a carbon neutral goal incorporating a district heating scheme, green roofs and high quality green space <br/> c) Accept proposal but reduce scale of development by 50% <br/> d) Reject the proposal outright: it is vital to retaining the integrity of the green belt and not permit any industrial encroachment <br/> e) Other option (please explain)", 
			"blue",
			"",
			""
		],
		[
			10, 
			"<br/> A disused quarry has been left to nature but is currently subjected to illegal fly tipping. The landowner is hoping to develop this area into coniferous woodland for timber production but the local Wildlife Trust argues that more benefits for conservation will accrue from a deciduous and coniferous mix with opportunities for timber production. In your view what is the best option and why?",
			"green",
			"",
			""
		],
		[
			11, 
			"<br/> A local farmer wishes to turn less productive fields into intensive horticulture involving polytunnels. The nearby St Ruf provides a ready-made local market (there is already a thriving farmers' market) and the business case is good as he has the necessary capital. However, there is concern about the landscape impact of the polytunnels and the local group &quot;Save our RUF landscape&quot; has asked you to support their campaign and protect the current farming landscape. What is your response and why?", 
			"orange",
			"",
			""
		],
		[
			12, 
			"<br/> A landowner within the Green Belt wishes to convert his fields into a public park including BMX/skateboard facilities and outdoor gym areas. There is currently no public access to his land. Should this be permitted? <br/> <br/> a) No, it is development in the Green Belt and changes the nature of the RUF <br/> b) No, it has compromised the openness of the Green Belt <br/> c) Yes, although it is development it has not compromised the openness of the Green Belt <br/> d) Yes, it remains Green Belt with a much improved land use/surface of value to society <br/> e) Other conclusion (please explain)", 
			"purple",
			"",
			""
		],
		[
			13, 
			"<br/> You regularly walk the land in this green belt square as part of a wider recreational route alongside the RUF canal. This stretch of the canal has recently been restored by the Canals and Rivers Trust and local volunteers. Given the potential increase in recreation (seasonal boating traffic and public access alongside the canal and link into the regional trail) what other opportunities would you support?",
			"orange",
			"",
			""
		],
		[
			14, 
			"<br/> A community forum has collected 2000 signatures from residents of this square who are complaining to URF District Council about the lack of recreational facilities. The quarry to the north east has reached the end of its working life and a condition of its restoration is for it to be usable as a community resource. Bearing in mind there is a lack of recreational resources in the area what type of facility would you like to see provided? <br/> <br/> a) Sports pitches for rugby and football as well as a skate ramp <br/> b) A nature reserve which is accessible to the public <br/> c) A council owned leisure centre with a swimming pool, tennis courts and squash courts <br/> d) A community woodland <br/> e) Other (please explain your answer)",
			"purple",
			"",
			""
		],
		[
			15, 
			"<br/> The lake in this former quarry workings is currently used as a recreational resource involving quiet water sports, angling and walking. It is also frequented by wildfowl including geese and herons but has no conservation designation. Does the lake in this setting have any value to you?",
			"orange",
			"",
			""
		],
		[
			16, 
			"<br/> There is a proposal to create a &quot;hill&quot; from construction and household waste of about 300 metres in height. This will help urban regeneration of RUFhampton and will take 10 years to complete. On completion it will be covered in decontaminated topsoil (also from urban regeneration) and landscaped. How would you treat this proposal in the best interests of the RUF? <br/> <br/> a) Welcome it for its positive impact on urban regeneration and negotiate a tipping levy to benefit wider RUF community projects. <br/> b) Maximise the benefits of this mountain through negotiating a long term tourism and recreation management plan <br/> c) Create a range of natural habitats to increase biodiversity and provide new (upland) wildlife areas to compensate for the impact of global warming <br/> d) Press for a scaled down hillock to better integrate with the RUF landscape character whilst achieving some of the above benefits in a shorter time scale <br/> e) Reject the proposal as inappropriate intrusive in the rural landscape, and unworkable <br/> f) Other (please explain your answer)",
			"purple",
			"",
			""
		],
		[
			17, 
			"<br/> This site is proposed for landfill with a projected 20 year capacity. How might you change your behavior and that of the residents of RUFshire to reduce their dependency on the provision of such sites in the longer term? Or are you happy with the identification of new sites for landfill in the future?",
			"purple",
			"",
			""
		],
		[
			18, 
			"<br/> A major employer in this area has recently closed with the loss of 2,500 jobs. The buildings stand empty. This has had a devastating effect on the local community. Four options are proposed on the following themes. Which one do you support and why. <br/> <br/> a) Technology Park in conjunction with the adjoining Technology College <br/> b) Environmental Research Centre linked to renewable energy <br/> c) Intensive urban agriculture <br/> d) Urban wilderness allowing nature to reclaim the site <br/> e) Other (please explain your answer)",
			"blue",
			"",
			""
		],
		[
			19, 
			"<br/> Under the forthcoming neighborhood plan proposals a local landowner with majority community support wants to develop more houses. However, these are within the green belt and close to an AONB. As there is an identified need for housing within a recent housing survey, what would be your response? <br/> <br/> a) Agree and select best area within or adjoining 'square' 19 on your plan <br/> b) Disagree as no new housing should be built in the green belt <br/> c) Look to increase the number of houses in your favoured area <br/> d) Look to decrease the number of houses in your favoured area. <br/> e) Other (please explain your answer)",
			"orange",
			"",
			""
		],
		[
			20, 
			"<br/> As you are walking along the side of the road in this area, you see a substantial amount of fly tipping. What is your response? <br/> <br/> a) Clear up the rubbish yourself and dispose of it correctly <br/> b) Walk on and do nothing <br/> c) Report it to the police <br/> d) Continually moan about the state of the area to anyone who will listen <br/> e) Other (please explain)",
			"orange",
			"",
			""
		],
		[
			21, 
			"<br/> The two landowners of the fields here decided to farm this land ecologically, with support from the local Wildlife Trust group and RSPB. The central area is undulating/hilly and there are some patches of heather remnants. What option would you recommend as an additional priority in the coming year to further improve environmental benefits and why? <br/> <br/> a) Set up a network of local landowners/farmers to encourage environmentally sensitive land management and ultimately extend the areal extent of the trust. <br/> b) Apply for planning permission to establish a small farm shop and sell produce from a range of local farms/food producers; use excess profit for trust land. <br/> c) Focus on initial work, but communicate progress and highlights through social networking sites (web blog, Facebook, twitter). <br/> d) Other (please specify)",
			"green",
			"",
			""
		],
		[
			22, 
			"<br/> St Ruf has been regularly flooding particularly during autumn and spring from increased water flow from the uplands in the AONB. What options for management of heavy rain might you consider to reduce flood risk? <br/> <br/> a) Increase flood defences in St Ruf outside the upland area <br/> b) Consider for the creation of lowland flood storage areas, such as flood meadows <br/> c) Consider upland management approaches such as tree planting to reduce peak flows <br/> d) Consider creating a multipurpose reservoir for flood protection ( Other option (please explain)",
			"green",
			"",
			""
		],
		[
			23, 
			"<br/> There are proposals to secure and improve public access in the form of a regional trail for horses, cyclists and walkers alongside the canal running through the RUF. There is talk of a proposed bid to the Heritage Lottery Fund with matched funding from the council, British Waterways and Natural England. This will link the urban area to the AONB. What is your response to this proposal? <br/> <br/> a) Create a partnership with all groups involved so issues can be worked through and a unified voice created <br/> b) Encourage individual interest groups to form who will feed into a strategy from different perspectives <br/> c) Encourage individual interest groups to form, those with the loudest voice will influence the outcome <br/> d) Do nothing as the proposal does not interest you",
			"blue",
			"",
			""
		],
		[
			24, 
			"<br/> This village is at the gateway for the AONB and residents are very concerned at the huge increase in visitors each year which clearly exceeds current road and parking capacity, resulting in traffic delays, congestion and off- street parking. A recent meeting has identified the following options: <br/> <br/> a) Build a major new car park outside the village <br/> b) Put double yellow lines through the village preventing street parking <br/> c) Establish a free park and ride scheme from St Ruf <br/> d) Expand the current railway station car park from 30 spaces to 300 <br/> e) Actively de-market the area and promote other visitor destinations",
			"purple",
			"",
			""
		],
		[
			25, 
			"<br/> You are conducting a survey on the desired future use of this area (square 25). All players on the board must stop and you must obtain their preferred option for this space. You then report on the majority view. <br/> <br/> a) Intensive agricultural production including a state of the art 'mega dairy' for 1,000 cattle <br/> b) A small B1 (light industrial) estate <br/> c) Creation of a shallow scrape for wildlife <br/> d) Small holiday village <br/> e) Leave it as it is",
			"purple",
			"",
			""
		],
		[
			26, 
			"<br/> A small community group has purchased a smallholding of 20 acres here and has started building, without planning permission, some low impact houses to pursue their green lifestyle. However, despite its location and small scale, the local RUF Wildlife Trust argues that this will deliver more environmental benefits than contemporary farming. Should the development be granted retrospective planning permission?",
			"green",
			"",
			""
		],
		[
			27, 
			"<br/> A new service station is proposed along the motorway which would be visible from Rufsty. Villagers are generally against the proposal but the Highway Agency and URF Council see it as a way of creating new jobs and revenue. Which of the following options would you support? <br/> <br/> a) Reject the proposal (existing service stations are 20 miles south, and 15 miles north) <br/> b) Accept the proposal but ensure shielded lighting and closure between 22:30 and 06:30 <br/> c) Accept the proposal of a 24hr service station <br/> d) Other option (please explain your answer)",
			"blue",
			"",
			""
		],
		[
			28, 
			"<br/> A farmer is proposing to develop a small scale food waste (anaerobic digestion) plant in his RUF farmland. Waste will be collected from homes in the nearby urban area by truck on a daily basis, producing electricity from the bio-gas and using the liquid and solid by-product as soil enhancers. Both electricity and soil enhancer could be sold locally. This would provide three local jobs in an area predominantly used for commuting. However, the local village opposes this on grounds of smell, traffic and noise. Should it be built?",
			"green",
			"",
			""
		],
		[
			29, //could also be "End"
			"<br/> You have had a varied journey across the rural urban fringe. Please review your answer cards and create your overall vision for RUFshire. You can only use your previous answers and supporting justifications.",
			"red",
			"",
			""
		]
	];

	// Get the question
	for (i=0; i<questionProperties.length; i++) {
		if (questionProperties[i][0] == questionID) {
			question.id = questionProperties[i][0];
			question.question = questionProperties[i][1];
			question.colour = questionProperties[i][2];
			question.answer = questionProperties[i][3];
			question.featureClass = questionProperties[i][4];
		}
	}

	// Return the question
	return question;
}


