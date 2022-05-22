// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import PieChart from "components/Charts/PieChart";

import LineChart from "components/Charts/LineChart";
import { RocketIcon } from "components/Icons/Icons";
import { StatsIcon } from "components/Icons/Icons";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { rtlDashboardTableData, rtlTimelineData } from "variables/general";
import ActiveUsers from "../Dashboard/components/ActiveUsers";
import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
import ChartStatistics from "../Dashboard/components/ChartStatistics";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import OrdersOverview from "../Dashboard/components/OrdersOverview";
import Projects from "../Dashboard/components/Projects";
import SalesOverview from "../Dashboard/components/SalesOverview";
import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";

export default function Dashboard() {
  // Chakra Color Mode

  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }} gap="26px">
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
          <MiniStatistics
            title={"מספר עובדים מועמדים"}
            amount={"175"}
            percentage={55}
            icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"מספר עובדים משתתפים"}
            amount={"96"}
            percentage={5}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"סכום גיוס פוטנציאלי"}
            amount={"1,500,423"}
            percentage={90}
            icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"סכום גיוס עתידי"}
            amount={"173,000"}
            percentage={8}
            icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
      </SimpleGrid>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap="26px" spacing="26px">
        <SimpleGrid rows={2}  gap="26px" spacing="26px">
        <SalesOverview
          title={"נתוני מנייה"}
          percentage={5}
          chart={<PieChart />}
        />
        <MiniStatistics
            title={"בונוס"}
            amount={"7.5% בונוס במזומן + 25% משיעור עליית הריבית"}
            percentage={7.5}
            icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
        </SimpleGrid>

        <SimpleGrid rows={2}  gap="26px" spacing="26px">
        <SalesOverview
          title={"נתוני מנייה"}
          percentage={5}
          chart={<LineChart />}
        />
        <SalesOverview
          title={"נתוני מנייה"}
          percentage={5}
          chart={<LineChart />}
        />
        </SimpleGrid>


        
      </SimpleGrid>




      
      {/* <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          title={"بناها المطورون"}
          name={"لوحة معلومات Purity UI"}
          description={
            "من الألوان والبطاقات والطباعة إلى العناصر المعقدة ، ستجد الوثائق الكاملة."
          }
          image={
            <Image
              src={logoChakra}
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"العمل مع الصواريخ"}
          description={
            "تكوين الثروة هو لعبة ثورية حديثة ذات محصلة إيجابية. الأمر كله يتعلق بمن يغتنم الفرصة أولاً."
          }
        />
      </Grid> */}
      {/* <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"المستخدمين النشطين"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"نظرة عامة على المبيعات"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid> */}
      {/* <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"المشاريع"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={rtlDashboardTableData}
        />
        <OrdersOverview
          title={"نظرة عامة على الطلبات"}
          amount={30}
          data={rtlTimelineData}
        />
      </Grid> */}
    </Flex>
  );
}
