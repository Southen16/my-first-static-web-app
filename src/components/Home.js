import './Home.css'

import research from './research.jpg';

const Home = () => {
    return (

        <div class="main">
            <header>
                <h1>Exploring Neighborhood Differences in Bicycling Accessibility</h1>
                <hr />
                <p>Armando E. Martinez<sup>1</sup>, Christopher D. Phair<sup>2</sup>, Brendan J. Russo<sup>3</sup>, and Steven R. Gehrke<sup>2</sup></p>
            </header>

            <article>
                <h2>Abstract</h2>
                <p>
                    Health concerns brought about by the Covid-19 pandemic, coupled with technological advancements over the past two
                    decades have altered the traditional workplace setting. Some professionals in the tertiary and quaternary economic sectors
                    have grown accustomed to virtual working environments, whereas others, including essential workers, have experienced less
                    flexibility in this regard and continue to commute to physical work settings. During the pandemic, residents of underresourced
                    communities, who were more likely to adopt lower-cost shared-use travel modes and would have benefited from
                    good access to high-quality bicycling infrastructure, embodied a greater share of the nonhealthcare workforce who was
                    required to commute to a physical work setting. This circumstance highlighted a need for research that examines bicycling
                    accessibility to workplaces distinguished by telework potential, with a hypothesis that underresourced communities with
                    more limited mobility options have poorer bicycling access to traditional workplace settings. In response, this study, which
                    describes the application of a novel bicyclist routing algorithm, investigated how these differences in job accessibility relate to
                    variations in the social context of neighborhoods where bicyclist commute trips originate, and the level of traffic stress
                    incurred by a current or prospective bicyclist along modeled routes in Flagstaff, AZ. Study findings, which in part confirmed
                    its hypothesis while also noting a latent demand for bicycling to physical workplaces along low-stress facilities, offer unique
                    insights into how the changing nature of work should be accounted for as active transportation planners and policy makers
                    seek to provide safer and more robust bicycle networks to their diverse communities.
                </p>
            </article>

            <article>
                <h2>Keywords</h2>
                <p>bicycles, equity (justice), level of service, planning and analysis, access/accessibility</p>
            </article>

            <br />
            <br />

            <div class="container">

                <div class="left-half">
                    <article>
                        <p>
                            Continued advancements in information and communication
                            technologies and the immediate impacts of Covid-
                            19 pandemic travel restrictions starting in March 2020
                            resulted in the sudden and dramatic increase of teleworking.
                            Telework, or the ability for an employee to forego
                            their commute to perform work-related duties remotely
                            (1), has risen in prominence over the last two decades (2)
                            to become a commonly employed practice by many professionals
                            in the tertiary (service-based) and quaternary
                            (knowledge-based) sectors of the economy. Accordingly,
                            employees in professions related to communication,
                            financial services, and information technology were wellsituated
                            and perhaps better capable of transitioning to a
                            home-based work environment at the pandemic’s onset than employees in other sectors (e.g., manufacturing) or
                            those deemed to be essential occupations. Essential workers,
                            who continued to commute to physical establishments
                            during the height of the pandemic, represent a
                            range of employees from different industries, with individuals from underresourced communities representing
                            a significant share of nonhealthcare workers required
                            to commute to a physical setting during the pandemic
                            (3). Having to commute to a physical establishment for
                            work demands reliable mobility options, with personal
                            vehicle ownership more likely to place a financial burden
                            on low-income households and residents of underresourced
                            communities (4).
                        </p>
                    </article>
                </div>
                <div class="right-half">
                    <article>
                        <p>Furthermore, during the onset
                            of the pandemic, the adoption of non-automobility
                            options such as public transit, which remained available
                            as a lower-cost travel option, were positively associated
                            with disease transmission (5).</p>
                        <hr />
                        <p><sup>1</sup>School of Informatics, Computing, and Cyber Systems, Northern Arizona
                            University, Flagstaff, AZ</p>
                        <p><sup>2</sup>Department of Geography, Planning, and Recreation, Northern Arizona
                            University, Flagstaff, AZ</p>
                        <p><sup>3</sup>Department of Geography, Planning, and Recreation, Northern Arizona
                            University, Flagstaff, AZ</p>
                    </article>

                    <br />

                    <b>Corresponding Author:</b>
                    <p>Steven R. Gehrke, steven.gehrke@nau.edu</p>
                </div>
            </div>

            <p>2</p>
            <hr />
            <div class="container">

                <div class="left-half">
                    <article>
                        <p>
                            In more common times, as well as the extraordinary
                            circumstances brought about by the Covid-19 pandemic,
                            bicycling has the potential to offer an inexpensive and
                            more sustainable commute mode than the automobile.
                            However, many American cities have incomplete bike
                            networks that require bicyclists to traverse commute
                            routes with long stretches of high-stress facilities.
                            Furthermore, many individuals who would be interested
                            in bicycling because of its economic, health, and environmental
                            benefits if a safe and connected network existed
                            are likely to continue to forego bicycling for personal
                            safety reasons. As such, alleviating network barriers
                            faced by current bicyclists and individuals, who for
                            safety reasons have not considered bicycling as a feasible
                            option when commuting to their physical workplace, is a
                            growing area of pursuit for local planning agencies.
                            Merging a need for innovative planning tools capable of
                            identifying the latent demand for bicyclists if given safer
                            bicycling facilities and understanding the changing
                            nature of work, this research sought to implement a
                            modern bicyclist network routing platform to investigate
                            the role of neighborhood context and bicycling route
                            comfort in accessibility to physical (and virtual) workplaces
                            by bicyclists with varying levels of traffic risk
                            aversion. A study hypothesis was that neighborhoods
                            with a higher representation of low-income and racial or
                            ethnic minority residents, who reflect a large share of
                            nonhealthcare essential workers, required to commute
                            during the pandemic, are more likely to have poorer
                            access to physical work environments when commuting
                            via bicycle.
                            In addressing this research aim, the structure of this
                            study of bicycling accessibility in Flagstaff, AZ is as follows.
                            First, a review of prior bicycling accessibility studies
                            is offered, with a later focus on those with a social equity–
                            based lens. This review is followed by a description of
                            data and methods used to classify bike network stress and
                            bicyclist route choices as well as a delineation of physical
                            and virtual jobs and analysis of job destination accessibility.
                            A third section discusses the descriptive and modeling
                            results of this study’s application of a bicyclist network
                            routing platform to understand neighborhood differences
                            in bicycling accessibility, which is followed by a concluding
                            section that describes this study’s contributions.
                            Literature Review
                            <br />
                            <br />
                            <b>Literature Review</b>
                            <br />
                            <br />
                            Although the study of bicycling access to destinations
                            has been relatively limited in planning practice (6), recent
                            contributions have established a knowledge base underscoring
                            its value to active transportation study, progress
                            in measurement, and development as a new planning
                            tool to help address transport inequities. Only in the past
                            decade have accessibility studies of bicycling risen to
                            greater prominence (7), with initial studies in this
                            research area centered on the idea of bikeability or suitability
                            for bicycling within a given geographic boundary.
                            In an early suitability study of commuting by bicycle in
                            Arizona, Sisson et al. created quarter-mile buffers
                            around 14 elementary school locations and scored the
                            bikeability of their enclosed street links based on traffic
                            conditions and roadway design characteristics; they
                            found that most school locations were adequate for
                        </p>
                    </article>
                </div>
                <div class="right-half">
                    <article>
                        <p>
                            school-aged children to bicycle (8). In a study of bikeability
                            in Vancouver, Canada, Winters et al. developed a
                            bicycling planning tool that generated an index based on
                            bike facility availability, topography, connectivity, and
                            local destinations to visualize areas of low and high suitability
                            for bicycling across the city (9). McNeil similarly
                            sought to operationalize the bikeability of particular
                            neighborhoods in Portland, OR via an objective assessment
                            of weighted destination types (e.g., schools, stores,
                            parks) found within various sizes of catchment areas
                            extending from 26 locations across the city (10). The
                            results of this study found that centrally located neighborhoods
                            characterized by higher household incomes
                            had better bikeability than neighborhoods with lowerincome
                            households and more suburban street networks.
                            Further progressing this field of research, several bicycling
                            accessibility studies have demonstrated the added
                            benefit of classifying the underlying bike network and
                            potential bicycling route alternatives based on traffic
                            safety and security. Incorporating perceived bicycling
                            comfort, Lowry et al. introduced a method for calculating
                            bikeability that used an existing accessibility measure
                            and approach for classifying any facility that permits
                            bicycling with an objectively defined bicycle level of
                            stress (11). The application of this planning assessment
                            tool in Moscow, ID, was done to evaluate a set of capital
                            investment scenarios for improving bikeability within the
                            city. Imani et al. (12) applied a four-tiered level of traffic
                            stress (LTS) measure (13) to a street network in
                            Toronto, Canada, while adopting a cumulative opportunities
                            accessibility metric to estimate bicycling access
                            within a 30-min commute based on LTS thresholds.
                            Neighborhood cycling access to jobs was bifurcated at
                            5,000 jobs to distinguish between low and high access
                            levels, which informed the specification of a binary logit
                            model to identify associated predictors. In a northern
                            Delaware study, Furth et al. advanced their four-tiered
                            LTS measure to account for annual average daily traffic
                            and other road design configurations to similarly examine
                            job accessibility by bicycling only on low-stress facilities
                            (14). Owen and Murphy estimated accessibility to
                            jobs by bicycling for the 50 largest metropolitan regions
                            in the United States with a similar four-tiered LTS measure
                            applied to street networks and travel time calculations
                            using OpenTripPlanner software (15).
                        </p>

                        <p>
                            Other notable studies have also evaluated bicycling
                            accessibility by assessing network connectivity with isochrones
                            generated by employing routing processes. In
                            an early nonmotorized accessibility study, Iacono et al.
                            put forth a set of practical strategies for addressing
                            issues with measuring walking and bicycling accessibility
                            related to zonal structure and travel networks in calculating
                            access to shopping destinations via the
                            shortest network path between two census geographies
                            (16). Cabral et al. evaluated low-stress bicycling connectivity
                            improvements in Edmonton, Canada spurred
                            by the addition of 20 km of protected bicycle lanes via
                            the application of a shortest path algorithm with a
                            detour factor used to remain exclusively on a low-stress
                            network (17). Gehrke et al., in turn, measured improvements
                            in bicycling access to employment opportunities
                            related to the proposed introduction of a shared-use
                            pathway in Cambridge, MA, that applied the Cyclist
                            Routing Algorithm for Network
                        </p>
                    </article>
                </div>
            </div>

            <p>3</p>
            <hr />

            <div class="container">

                <div class="left-half">
                    <article>
                        <p>
                            Conceptual advancements in bicycling accessibility
                            measurement have also been accompanied by socialequity-
                            focused studies, conducted to help identify communities
                            who are likeliest to benefit from bike facility
                            improvements and disparately affected by existing bike
                            network conditions. In the context of this study, understanding
                            how past bicycling accessibility research has
                            analyzed impacts to underresourced communities could
                            offer some insights into the associations between nonhealthcare
                            essential workers and bicycling access to
                            physical workplaces. Houde et al. (19) used six nonconsecutive
                            years of bicycling infrastructure snapshots in
                            Montreal, Canada to determine whether citywide expansions
                            in bike network connectivity improved bicycling
                            accessibility for low-income populations, immigrants,
                            older residents, and children. Study results revealed that
                            although low-income individuals generally had good
                            bicycling access throughout the 25-year period, a strong
                            decrease in access was observed for immigrants and
                            seniors, with little improvement for districts with higher
                            shares of children (19). In a study of bicyclist access to
                            employment or educational opportunities in Bogota,
                            Columbia, Rosas-Satiza´ bal created a potential accessibility
                            metric with a distance decay factor and inequality
                            indicators to identify social inequities between bicyclist
                            groups, finding that one-half of Bogota’s bicyclists have
                            access to less than 10% of all employment and educational
                            opportunities owing to the city’s urban structure
                            and longer travel distances for lower-income residents to
                            downtown job sites (20). In another South American
                            study of bicyclist accessibility, Mora et al. examined
                            whether the expansion of a bicycling network in
                            Santiago, Chile over 15 years had disparate impacts for
                            communities characterized by residents of different
                            income cohorts, concluding that most high-quality bicycling
                            facilities are located in central communities
                            characterized by residents earning higher incomes (21).
                            Incorporating LTS classifications of road networks into
                            a study of bicycling access in Rio de Janeiro and
                            Curitiba, Brazil, Tucker and Manaugh similarly found
                            that each city had substantially more bicycle infrastructure
                            in wealthier areas and, subsequently, these residents
                            have higher job accessibility along safer routes (22). In a
                            Minneapolis, MN, study of socioeconomic discrepancies
                            in job accessibility via low-stress bicycling facilities and
                            links in the overall street network, Wang and Lindsey
                            compared Gini coefficients to assess the potential social
                            inequities faced by disadvantaged populations, finding
                            that low-stress, multiuse urban trails were less likely to
                            be distributed in census block groups with higher racial
                            or ethnic minority populations and more families living
                            in poverty (23). Kent and Karner, in a Baltimore, MD,
                            bicycling accessibility study, introduced a set of performance
                            measures to compare the potential accessibility
                            benefits and socioeconomic impacts of infrastructure
                            projects, highlighting options from their analysis with
                            the potential to better serve disadvantaged neighborhoods
                            experiencing racial segregation, higher levels of
                            poverty, and lower vehicle ownership rates (24).
                        </p>

                        <p>
                            Taken together, this review has highlighted some of
                            the conceptual and empirical advancements of recent
                            research investigating location-based bicycling accessibility.
                            Specifically, greater focus has been placed on implementing
                            accessibility metrics that account for the
                            perceived quality of the network for bicycling and quantifying
                            the impact of current or proposed bicycle facilities
                            on destination accessibility of underresourced communities.
                            This research aims to meet this practice standard
                            for examining bicycling accessibility while also contributing
                            to a growing evidence base assessing the social equity
                            implications of bicycling access to destinations by (i)
                            measuring destination access with a network routing
                            engine that is behaviorally reflective of actual bicyclists
                            who are likely to consider alternative routes to the
                        </p>
                    </article>
                </div>

                <div class="right-half">
                    <article>
                        <p>
                            shortest path, (ii) offering nuance in the types of employment
                            destinations that are most likely to generate a
                            latent demand for utilitarian trips, and (iii) investigating
                            whether underresourced communities have poorer bicycling
                            access to traditional workplace settings. To this
                            end, this study’s application of an original bicyclist network
                            routing platform to identify differences in bicycling
                            accessibility to physical and virtual worksites attributed
                            to varying neighborhood-level socioeconomic attributes
                            seeks to offer a technical advancement that can be
                            adopted by transportation planners to prioritize facility
                            investments that address existing transport inequities.
                        </p>

                        <b>Data and Methods</b>
                        <br />
                        <p>
                            The first subsection provides a description of the bike
                            network data source and methods used to classify its
                            links based on perceived traffic safety. This enhanced
                            street network is a requisite input for the bicycling
                            routing-algorithm described in the second subsection,
                            which generates geographic boundaries (isochrones) for
                            enumerating destinations. The third subsection details
                            the data sources and methods for delineating physical
                            and virtual employment destinations as well as contextual
                            measures of the socioeconomic and demographic
                            attributes of residents at modeled trip origins. The last
                            subsection describes the statistical modeling strategy
                            adopted to identify the contextual factors associated with
                            bicycling accessibility to physical and virtual jobs.
                        </p>

                        <i>Bike Network Classification</i>
                        <br />

                        <p>To understand the perceived comfort of the street network
                            for bicycling, an updated version of the four-tiered
                            LTS classification scheme (14) initially described by
                            Mekuria et al. (25) was adopted for this study. The
                            updated version of the LTS scheme classifies segments
                            based on traffic characteristics (e.g., travel lanes, posted
                            travel speeds) and the presence of dedicated bike infrastructure.
                            For this study, a modified version of this updated LTS scheme was applied to Flagstaff, AZ using
                            the OpenStreetMap (OSM) transportation network
                            (Table 1). The use of this open-source and editable transportation
                            network for LTS classification enhances the
                            transferability of the network output but requires some
                            aggregation of categories because of data availability
                            limitations with regard to bike lane widths and daily traffic
                            volumes. Where posted travel speed (‘‘maxspeed’’ tag)
                            gaps existed in the crowd-sourced OSM data set, an
                            imputed value based on the OSM ‘‘highway’’ tag designation
                            and prevailing traffic speed limits in Arizona was
                            inserted: residential=25 mph, service=35 mph, secondary=
                            55 mph, and primary=65 mph.</p>
                        <p>Dill and McNeil (27, 28),
                            transportation facilities with a classification in the final
                            LTS category are only suitable for the ‘‘strong and fearless’’
                            bicyclist type, whereas the first two LTS categories
                            describe a facility that would be comfortable for an
                            ‘‘interested but concerned’’ bicyclist, and those facilities
                            classified as moderate stress (LTS 3) are suitable for
                            ‘‘enthused and confident’’ or ‘‘strong and fearless’’ bicyclist
                            types (25).</p>
                    </article>
                    <i>Bicyclist Routing Engine and Bicycling Accessibility</i>
                    <p>This study adopted the CRANC, previously introduced
                        by Gehrke et al., to calculate bicycling accessibility
                        with a common cumulative opportunities metric (18).
                        The CRANC transportation planning tool uses
                        GraphHopper, an open-source Java library and web</p>
                </div>
            </div>

            <p>4</p>
            <hr />

            <img src={research} height="600px" width="1240px" alt="research" />
            <p><b>Figure 1.</b> Street network in Flagstaff, AZ classified into four categories by bicyclist level of traffic stress (LTS).</p>

            <div class="container">
                <div class="left-half">
                    <article>
                        <p>
                            service, as its base network routing engine, with modifications
                            that permit the creation of distinct bicyclist
                            profiles with route and travel speed differences that are
                            sensitive to link-level changes in network facilities and
                            topography. GraphHopper’s base network routingalgorithm
                            generates an internal representation of the
                            street network as a graph of directed links (or edges)
                            between two nodes. In this study, OSM network data
                            for Flagstaff were extracted using Geofabrik tools to
                            identify links, while nodes were represented as U.S.
                            census block centroids in the study area. For all origin–
                            destination pairs, after assigning impedance values to
                            the graph’s edges based on road segment length as well
                            as the speed of a bicyclist type and their aversion to the
                            road segment, the GraphHopper routing-algorithm
                            determines the route between the two trip ends with the
                            lowest summation of impendence values. In this study,
                            only routes generated for an ‘‘interested but concerned’’
                            bicyclist who travels at a slower speed than the
                            ‘‘enthused and confident’’ bicyclist profile, and has
                            greater sensitivity to changes in elevation over a road
                            segment’s length, were analyzed. Greater detail on the
                            assignment of travel speeds based on road class and
                            bicyclist type and aversion factors based on road class
                            and available bicycle facilities is provided in the
                            research by Gehrke et al. (18). Having refined and transferred the CRANC tool to
                            this study’s setting, the next step was to measure the
                            bicycling accessibility of the ‘‘interested but concerned’’
                            to a set of destinations. Using the GraphHopper isochrone
                            module, the travel time for the interested but concerned
                            bicyclist was computed from every U.S. census block centroid contained in the city’s boundary (trip origin)
                            to all centroids in Coconino County, including the
                            city of Flagstaff (trip destinations). Figure 2 offers an
                            illustration of the result of this process for an exemplar
                            trip origin. The attributes associated with any destination
                            centroid within the 30-min isochrone for a particular
                            trip origin were then related to the U.S. block where the
                            trip origin was located. For this study, 2,076 U.S. census
                            block centroids were found in Flagstaff and 20,267 centroids
                            inside Coconino County. Additionally, the percentage
                            of network facilities classified by different LTS
                            categories within an isochrone was attributed to the centroid
                            of the originating census block.
                        </p>
                    </article>
                </div>

                <div class="right-half">
                    <article>
                        <i>Employment and Social Context Measurement</i>

                        <p>
                            Identifying the U.S. census block geography as the unit
                            of analysis for measuring bicycling accessibility, the
                            2019 Longitudinal Employer-Household Dynamics
                            (LEHD) data set’s workplace area characteristics file
                            was used to represent employment locations. Although
                            the 2019 workplace information has the benefit of signifying
                            employment characteristics before the onset of
                            the Covid-19 pandemic, its representation at a 2010
                            decennial census geography required augmentation for
                            these data to complement Flagstaff’s current boundary
                            and the most recent available information on neighborhood
                            socioeconomic context. As such, the 2010 U.S.
                            census blocks that intersected the city’s current boundary
                            were selected, with the centroids of the blocks overlapping
                            the city’s boundary placed in the portion of the
                            block congruent with the current city boundary.
                            Using the revised distribution of census block centroids
                            in Flagstaff and blocks outside of the city but
                            within Coconino County, the next step was to determine
                            which types of jobs located in a block required the physical
                            presence of a worker (physical jobs) and those jobs
                            that could be performed remotely (virtual jobs). In this
                            study, the distribution of jobs that could be performed at
                            home, according to their two-digit North American
                            Industry Classification System (NAICS) code determined
                            by Dingel and Neiman, was applied to each census block
                            geography. The collection of block-level physical and virtual job
                            totals, determined by applying the virtual job shares.noted in Table 2, was used to estimate the number of
                            jobs that could be accessed by an ‘‘interested but concerned’’
                            bicyclist in 30 min. To help characterize the
                            social context of the block-level trip origins, a set of individual-
                            and household-level measures were constructed
                            from 5-year estimates of the 2016 to 2020 American
                            Community Survey. Table 3 summarizes these selected
                            measures, which include the gender, age, and race or ethnicity
                            distribution of study area residents as well as the
                            distribution of annual incomes, housing tenure, and vehicle
                            ownership rates of study area households.
                        </p>
                    </article>
                </div>
            </div>

            <p>5</p>
            <hr />
            <div class="container">
                <div class="left-half">
                    <article>
                        <p>
                            This section is divided into two subsections. The first
                            subsection describes the spatial distribution of virtual
                            and physical workplaces in the study area, followed by a
                            description of the variation in bicycling access to these
                            two destination types across trip origins. The second subsection
                            describes the modeling results of estimating bicycling
                            access to physical and virtual jobs as a function of
                            origin-related contextual factors.

                            <i>Physical and Virtual Job Distribution and Bicycling
                                Accessibility</i>

                            Figure 3 is a side-by-side visualization of the distribution
                            of physical and virtual jobs in the city of Flagstaff. A
                            review of census blocks grouped in the highest physical
                            job category and clusters of blocks with higher concentrations
                            of physical jobs revealed land use patterns that
                            were specific to the study area, and common locations
                            for prospective bike commutes. Physical job locations
                            were predominately scattered east-to-west, adjacent to
                            U.S. Route 66 and the railroad tracks that bisect the
                            northern and southern halves of the city (Figure 3a). The
                            proximity of these two facilities and Interstate-40, which
                            also runs east-to-west on the eastern half of the city, has
                            a likely association with the stretch of manufacturing and warehousing job locations within the central-eastern portion
                            of the city. The Flagstaff Mall and its high share of
                            retail job positions can be seen in the northeast, whereas
                            other large physical job concentrations pertaining to
                            commercial highway stores are noticeable to the east of
                            the city’s centrally located downtown. The centralwestern
                            portion of the city, which includes a cluster of
                            smaller retail shops and larger big box stores, has a cluster
                            of blocks with 50 to 500 physical jobs, whereas
                            smaller census blocks with more than 500 physical jobs,
                            which include Northern Arizona University (NAU) and
                            Coconino Community College, are located south of the
                            city’s downtown.
                        </p>

                        <p>
                            In contrast, census blocks with higher counts of virtual
                            jobs were fewer in number and generally located in
                            more confined clusters along the aforementioned transportation
                            facilities in the city’s eastern half (Figure 3b).
                            Although many of the same census blocks with high virtual
                            job totals mirrored those areas with more physical
                            jobs, a handful of smaller blocks in the city’s downtown
                            and western half had blocks with virtual job totals that
                            were classified in a higher category (i.e., 500 and above
                            versus 101 to 500). These identified blocks tended to be
                            the location of administrative offices for local or state
                            governments or smaller financial firms. In all, although
                            there were notable discrepancies in the distribution of
                            census blocks based on the location of physical and virtual
                            jobs, most areas with a higher intensity of physical
                            jobs were also the location of virtual jobs, albeit with a
                            slightly lower total of the latter job type. This descriptive finding is probably related to a lack of diversity in the
                            job sectors found in Flagstaff and the circumstance that
                            the city is home to some larger companies that have a
                            strong manufacturing, retail, or warehousing presence
                            and a smaller percentage of jobs associated with information,
                            finance and insurance, or management. With an understanding of the distribution of physical
                            employment locations and the share of positions at current
                            workplaces that could be performed virtually,
                            Figure 4 provides a visualization of the number of physical
                            and virtual jobs that could be reached within a 30-
                            min commute by an ‘‘interested but concerned’’ bicyclist.
                            Given the higher number of physical jobs located in
                            Flagstaff, it is unsurprising to see from this second sideby-
                            side comparison
                        </p>
                    </article>
                </div>

                <div class="right-half">
                    <article>
                        <p>
                            that bicyclists from the majority of
                            residences could reach over 10,000 potential jobs within
                            the designated travel time. Potential ‘‘interested but concerned’’
                            bicyclists who reside in the western half of the
                            city had stronger bicycling access to physical jobs,
                            whereas improvements could also be found in neighborhoods
                            to the south and southeast of the city’s downtown.
                            In all, physical and virtual job access appeared to be
                            greatest for residents in centrally located neighborhoods
                            north of Interstate-40, with no clear distinction of census
                            block clusters where residents would have less accessibility
                            to physical jobs. To better identify any measurable differences between
                            physical and virtual job accessibility for ‘‘interested but
                            concerned’’ bicyclists, Figure 5 visualizes block-level differences
                            in job access, in which darker shades of orange reflect larger physical job access disparities and darker
                            shades of blue reflect greater discrepancies in virtual job
                            accessibility by bicycle. From this map, several census
                            blocks where residences were found to have greater bicycling
                            accessibility to virtual jobs can be found in the city’s
                            eastern half. Although the number of blocks meeting this
                            condition was limited, their location in the sparsely
                            populated neighborhoods away from the city’s larger
                            economic hubs is unsurprising. In turn, the cluster of
                            census blocks with the highest number of physical jobs
                            that can be accessed in a 30-min bicycling commute in
                            comparison to virtual jobs was located at the northwest
                            corner of where Interstate-40 intersects Interstate-17.
                            This area has few residences, is the site of a Walmart as
                            well as a several restaurants and hotels, and benefits from
                            low-stress access through Northern Arizona University
                            to manufacturing and warehousing sites located in the
                            central-eastern part of the city. Whereas those areas with
                            the largest discrepancy between physical and virtual job
                            access were found in the northern half of Flagstaff,
                            blocks immediately to the southeast and southwest of the
                            aforementioned interstate junction were also found to
                            have disproportionate bicycling access to physical job
                            locations. These two areas are largely residential areas
                            with single-family houses and an underlying suburban
                            street network.
                        </p>

                        <b>Conclusions</b>

                        <p>
                            This study of bicycling accessibility to physical and virtual
                            job locations sought to contribute to an expanding
                            field of bicycling research. First, this study described the
                            refinement of a previously developed bicyclist routing
                            platform (18) and its application in a new study area.
                            This adaptation of the CRANC tool to use OSM as an
                            underlying network and to quantify the potential stress
                            encountered by a bicyclist based on a four-tier LTS classification
                            scheme has improved the potential transferability
                            of this open-source planning tool and offered greater
                            nuance in routing an ‘‘interested but concerned’’ bicyclist
                            who may not view a network as a simple dichotomy of
                            low- and high-stress links. This application of the
                            CRANC tool to Flagstaff, AZ, which is characterized by
                            an extensive off-street trail network and topographic variation,
                            also required routing algorithm improvements
                            related to sensitivity in link-level elevation changes and
                            surface conditions.
                            <p>
                                Second, this study sought to offer insights in relation
                                to bicycling accessibility to physical and virtual job locations,
                                with a clearer identification of the former job
                            </p>
                        </p>
                    </article>
                </div>
            </div>

            <p>6</p>
            <hr />
            <div class="container">
                <div class="left-half">
                    <article>
                        <p>
                            type
                            needed to further parse out where additions or improvements
                            to bicycling facilities can be made to help promote
                            utilitarian travel by this more sustainable and healthy
                            mode. Recent global circumstances coupled with ongoing
                            technological advancements have brought to light the
                            ability for some jobs to be performed remotely or at
                            home and the necessity for others to have a worker’s
                            physical presence. During the Covid-19 pandemic, these
                            physical jobs were generally held by essential workers,
                            who were more likely to travel during the height of the
                            pandemic and be more susceptible to disease transmission
                            when using public transit (3). Given that many
                            essential workers are also more likely to earn a low wage
                            (33), prioritization for the provision of high-quality bicycling
                            facilities near employment districts with a higher concentration of physical jobs should be considered as a
                            further means of providing a safe, healthy, and low-cost
                            travel option to urban residents.
                        </p>
                        <p>
                            Third, the findings from this study’s analysis of cumulative
                            accessibility to physical job locations hinted at the
                            potential latent demand for bicycle commuting for residents
                            who may traditionally be less likely to adopt this
                            travel mode. Census block origins with a higher percentage
                            of older working-age adults, individuals who identify
                            as Hispanic or Latino, and households with lower
                            annual incomes were all more likely to have better bicycling
                            access to physical job locations when considering
                            lower-stress routes and slower travel speeds. However,
                            many of these communities have been previously found
                            to constitute a relatively low share of bicyclists who currently
                            commute in the United States. Accordingly, these
                            findings support a growing need for continued analyses
                            that could help to better inform transportation planners
                            and policy makers about how to market bicycling as a
                            potentially feasible, safe, and cost-effective travel alternative
                            to commuting by car, and to ensure that facility
                            improvements for small, critical gaps to a safe network
                            are prioritized to offer continuity in low-stress bicycling
                            conditions.
                        </p>

                        <p>
                            Also of importance, the application of this introduced
                            bicycle routing engine to investigate whether underresourced
                            communities have poorer bicycling access to traditional
                            workplace settings revealed interesting insights.
                            Whereas neighborhoods with a higher share of individuals
                            who identified as Hispanic or Latino were found to
                            have greater bicycling access to physical jobs, neighborhoods
                            with a higher share of individuals who reported
                            an annual household income below $10,000 were found
                            to have lower levels of accessibility. Moreover, neighborhoods
                            with a greater share of both Hispanic or Latino
                            residents and lower-income households were found to
                            have poorer bicycling access to physical job opportunities.
                            This study finding points to the continued importance
                            of examining the intersection of socioeconomic
                            identities in transportation planning and the potential
                            benefit that CRANC and other similar decision-making
                            tools may have in helping to recognize communities
                            where bike facility improvements should be prioritized to
                            improve access.
                        </p>

                        <p>
                            Although this study has offered the aforementioned
                            contributions, future research should address some of its
                            more prominent limitations. Although notable advancements
                            to the CRANC tool were made for its application
                            in a small urban setting, greater variation in travel times
                            and employment opportunities are likely to be found in
                            more populous cities. As such, future studies adopting
                            this bicycling planning tool should look to assess larger
                            metropolitan regions with greater land use diversity and
                            more polycentric development patterns.
                        </p>
                    </article>
                </div>
                <div class="right-half">
                    <article>
                        <b>Acknowledgments</b>
                        <p>
                            The authors sincerely thank the three anonymous reviewers for
                            their insightful feedback and suggestions.
                        </p>

                        <b>Author Contributions</b>
                        <p>The authors confirm contribution to the paper as follows: study
                            conception and design: S. R. Gehrke, B. J. Russo; data collection:
                            A. E. Martinez, S. R. Gehrke; analysis and interpretation
                            of results: A. E. Martinez, S. R. Gehrke; draft manuscript preparation:
                            A. E. Martinez; C. D. Phair, S. R. Gehrke. All
                            authors reviewed the results and approved the final version of
                            the manuscript.</p>
                    </article>

                    <b>Declaration of Conflicting Interests</b>
                    <p>The authors declared no potential conflicts of interest with
                        respect to the research, authorship, and/or publication of this
                        article.</p>
                    <b>Funding</b>
                    <p>The authors disclosed receipt of the following financial support
                        for the research, authorship, and/or publication of this article:
                        This research was funded by Northern Arizona University’s Interns-to-Scholars program and a Research Bridge Award
                        from Northern Arizona University’s Office of the Vice
                        President for Research.</p>
                    <b>References</b>
                    <p>1. Rafiq, R., M. G. McNally, Y. S. Uddin, and T. Ahmed.
                        Impact of Working from Home on Activity-Travel Behavior
                        During the COVID-19 Pandemic: An Aggregate
                        Structural Analysis. Transportation Research Part A: Policy
                        and Practice, Vol. 159, 2022, pp. 35–54.</p>
                    <p>2. de Abreu e Silva, J., and P. C. Melo. Home Telework,
                        Travel Behavior, and Land-Use Patterns. Journal of Transport
                        and Land Use, Vol. 11, No. 1, 2018, pp. 419–441.</p>
                    <p>3. Sy, K. T. L., M. E. Martinez, B. Rader, and L. F. White.
                        Socioeconomic Disparities in Subway Use and COVID-19
                        Outcomes in New York City. American Journal of Epidemiology,
                        Vol. 190, No. 7, 2021, pp. 1234–1242.</p>
                    <p>4. Wachs, M. Transportation Policy, Poverty, and Sustainability:
                        History and Future. Transportation Research
                        Record: Journal of the Transportation Research Board,
                        2010. 2163: 5–12.</p>
                    <p>
                        5. Zhu, R., L. Anselin, M. Batty, M. P. Kwan, M. Chen, W.
                        Luo, T. Cheng, et al. The Effects of Different Travel Modes
                        and Travel Destinations on COVID-19 Transmission in Global
                        Cities. Science Bulletin, Vol. 67, No. 6, 2022, p. 588.</p>
                    <p>6. Siddiq, F. D., and B. Taylor. Tools of the Trade? Assessing
                        the Progress of Accessibility Measures for Planning
                        Practice. Journal of the American Planning Association,
                        Vol. 87, No. 4, 2021, pp. 497–511.</p>
                    <p>7. Vale, D. S., M. Saraiva, and M. Pereira. Active Accessibility:
                        A Review of Operational Measures of Walking and
                        Cycling Accessibility. Journal of Transport and Land Use,
                        Vol. 9, No. 1, 2016, pp. 209–235.</p>

                </div>
            </div>
            <p>7</p>
            <hr />
            <div class="container">
                <div class="left-half">
                    <article>
                        <p>8. Sisson, S. B., S. M. Lee, E. K. Burns, and C. Tudor-Locke.
                            Suitability of Commuting by Bicycle to Arizona Elementary
                            Schools. American Journal of Health Promotion, Vol.
                            20, No. 3, 2006, pp. 210–213.</p>
                        <p>9. Winters, M., M. Brauer, E. M. Setton, and K. Teschke.
                            Mapping Bikeability: A Spatial Tool to Support Sustainable
                            Travel. Environment and Planning B: Planning and
                            Design, Vol. 40, No. 5, 2013, pp. 865–883.</p>
                        <p>10. McNeil, N. Bikeability and the 20-min Neighborhood:
                            How Infrastructure and Destinations Influence Bicycle
                            Accessibility. Transportation Research Record: Journal of
                            the Transportation Research Board, 2011. 2247: 53–63.</p>
                        <p>11. Lowry, M. B., D. Callister, M. Gresham, and B. Moore.
                            Assessment of Communitywide Bikeability with Bicycle
                            Level of Service. Transportation Research Record: Journal
                            of the Transportation Research Board, 2012. 2314: 41–48.</p>
                        <p>
                            12. Imani, A. F., E. J. Miller, and S. Saxe. Cycle Accessibility
                            and Level of Traffic Stress: A Case Study of Toronto. Journal
                            of Transport Geography, Vol. 80, 2019, p. 102496.</p>
                        <p>13. Furth, P. G., M. C. Mekuria, and H. Nixon. Network
                            Connectivity for Low-Stress Bicycling. Transportation
                            Research Record: Journal of the Transportation Research
                            Board, 2016. 2587: 41–49.</p>
                        <p>14. Furth, P. G., T. V. Putta, and P. Moser. Measuring Low-
                            Stress Connectivity in Terms of Bike-Accessible Jobs and
                            Potential Bike-to-Work Trips. Journal of Transport and
                            Land Use, Vol. 11, No. 1, 2018, pp. 815–831.</p>
                        <p>15. Owen, A., and B. Murphy. Access Across America: Bike
                            2019. Accessibility Observatory, Center for Transportation
                            Studies, University of Minnesota, Minneapolis, 2020.
                            https://access.umn.edu/research/america/biking/2019/documents/
                            AccessAcrossAmerica-Bike2019-Methodology_wb.
                            pdf. Accessed December 14, 2022.</p>
                        <p>16. Iacono, M., K. J. Krizek, and A. El-Geneidy. Measuring
                            Non-Motorized Accessibility: Issues, Alternatives, and
                            Execution. Journal of Transport Geography, Vol. 18, No. 1,
                            2010, pp. 133–140.</p>
                        <p>17. Cabral, L., A. M. Kim, and M. Shirgaokar. Low-Stress
                            Bicycling Connectivity: Assessment of the Network Build-
                            Out in Edmonton, Canada. Case Studies on Transport Policy,
                            Vol. 7, No. 2, 2019, pp. 230–238.</p>
                        <p>18. Gehrke, S. R., A. Akhavan, P. G. Furth, Q. Wang, and T.
                            G. Reardon. A Cycling-Focused Accessibility Tool to Support
                            Regional Bike Network Connectivity. Transportation
                            Research Part D: Transport and Environment, Vol. 85,
                            2020, p. 102388.</p>
                        <p>19. Houde, M., P. Apparicio, and A. M. Se´guin. A Ride for
                            Whom: Has Cycling Network Expansion Reduced Inequities
                            in Accessibility in Montreal, Canada? Journal of Transport
                            Geography, Vol. 68, 2018, pp. 9–21.</p>
                        <p>20. Rosas-Satiza´ bal, D., L. A. Guzman, and D. Oviedo. Cycling
                            Diversity, Accessibility, and Equality: An Analysis of Cycling
                            Commuting in Bogota´ . Transportation Research Part D:
                            Transport and Environment, Vol. 88, 2020, p. 102562.
                        </p>
                    </article>
                </div>
                <div class="right-half">
                    <article>
                        <p>
                            21. Mora, R., R. Truffello, and G. Oyarzu´ n. Equity and Accessibility
                            of Cycling Infrastructure: An Analysis of Santiago
                            de Chile. Journal of Transport Geography, Vol. 91, 2021, p.
                            102964.</p>
                        <p>22. Tucker, B., and K. Manaugh. Bicycle Equity in Brazil:
                            Access to Safe Cycling Routes Across Neighborhoods in
                            Rio de Janeiro and Curitiba. International Journal of Sustainable
                            Transportation, Vol. 12, No. 1, 2018, pp. 29–38.</p>
                        <p>23. Wang, J., and G. Lindsey. Equity of Bikeway Distribution
                            in Minneapolis, Minnesota. Transportation Research
                            Record: Journal of the Transportation Research Board,
                            2017. 2605: 18–31.</p>
                        <p>24. Kent, M., and A. Karner. Prioritizing Low-Stress and
                            Equitable Bicycle Networks Using Neighborhood-Based
                            Accessibility Measures. International Journal of Sustainable
                            Transportation, Vol. 13, No. 2, 2019, pp. 100–110.</p>
                        <p>25. Mekuria, M. C., P. G. Furth, and H. Nixon. Low-Stress
                            Bicycling and Network Connectivity. Mineta Transportation
                            Institute, San Jose, CA, 2012. https://transweb.sjsu.
                            edu/research/Low-Stress-Bicycling-and-Network-Connectivity.
                            Accessed July 31, 2022.</p>
                        <p>26. Geller, R. Four Types of Cyclists. Portland Bureau of
                            Transportation, OR, 2006. https://www.portland.gov/sites/
                            default/files/2022/Four%20Types%20of%20Cyclists%
                            20updated%202009.pdf. Accessed July 31, 2022.</p>
                        <p>27. Dill, J., and N. McNeil. Four Types of Cyclists? Examination
                            of Typology for Better Understanding of Bicycling
                            Behavior and Potential. Transportation Research Record:
                            Journal of the Transportation Research Board, 2013. 2387:
                            129–138.</p>
                        <p>28. Dill, J., and N. McNeil. Revisiting the Four Types of
                            Cyclists: Findings from a National Survey. Transportation
                            Research Record: Journal of the Transportation Research
                            Board, 2016. 2587: 90–99.</p>
                        <p>29. Dingel, J. I., and B. Neiman. How Many Jobs Can be
                            Done at Home? Journal of Public Economics, Vol. 189,
                            2020, p. 104235.</p>
                        <p>30. Pucher, J., R. Buehler, and M. Seinen. Bicycling Renaissance
                            in North America? An Update and Re-Appraisal
                            of Cycling Trends and Policies. Transportation Research
                            Part A: Policy and Practice, Vol. 45, No. 6, 2011,
                            pp. 451–475.</p>
                        <p>31. Barajas, J. M. Perceptions, People, and Places: Influences
                            on Cycling for Latino Immigrants and Implications for
                            Equity. Journal of Planning Education and Research, Vol.
                            43, No. 1, 2023, pp. 196–211.</p>
                        <p>32. Heinen, E., B. Van Wee, and K. Maat. Commuting by
                            Bicycle: An Overview of the Literature. Transport Reviews,
                            Vol. 30, No. 1, 2010, pp. 59–96.</p>
                        <p>33. Gallagher, S., A. Roy, S. J. Domeracki, T. Mohrmann, V.
                            Missar, J. Jule, S. Sharma, and R. DeWitt. The Low-Wage
                            Essential Worker: Occupational Concerns and Needs in
                            the COVID-19 Pandemic—A Round Table. Workplace
                            Health & Safety, Vol. 69, No. 4, 2021, pp. 154–160.
                        </p>
                    </article>
                </div>
            </div>

            <hr />
            <section>
                <h1>Addendum</h1>

                <p>
I have selected this research paper because it was authored by my research team. I have obtained permission from my professor to ensure that there are no copyright concerns.</p>
                
                <h2>HTML Tags used in the Doc</h2>
                <p>The &lt;section&gt; section tag used to group the related content.</p>
                <p>The &lt;div&gt; element with the class "main" is used to create a container or section within the webpage for organizing content.</p>
                <p>The &lt;br&gt; element inserts a line break, creating vertical space between content elements.</p>
                <p>An &lt;h1&gt; element represents the highest level of heading and is used to define the main title of a section or webpage.</p>
                <p>The &lt;hr&gt; element creates a horizontal line or thematic break, often used to separate content sections visually.</p>
                <p>The &lt;p&gt; element defines a paragraph of text, making it suitable for displaying regular content or text paragraphs.</p>
                <p>The &lt;article&gt; element is used to encapsulate a self-contained piece of content, making it suitable for structuring individual sections or articles within a webpage.</p>
                <p>An &lt;h2&gt; element represents a secondary heading, commonly used to organize content hierarchically beneath main headings.</p>
                
            </section>
            
        </div>

    );
}

export default Home;