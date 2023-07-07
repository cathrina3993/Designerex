import * as searchAllDress from "../../../pageobject/homePage/SearchDress/Findwologin"
import * as FavouriteDress from "../../../pageobject/homePage/InitialFeatures/AddToFavourite"
import * as Filterpage from "../../../pageobject/homePage/SearchDress/Filter"
import * as FastDelivery from "../../../pageobject/homePage/InitialFeatures/FastDelivery"
import * as BorrowDress from "../../../pageobject/homePage/InitialFeatures/RequestBooking"
import * as HambugerMenu from "../../../pageobject/Hamburger/hamburgermenu"
import * as FeaturedPage from "../../../pageobject/homePage/SearchDress/Featured"

describe("Test Sceanrios Without  login the system", () => {
    beforeEach(() => {

        cy.visitUrl() //this command is call from the command.js file it will visit the website and enter the credential

    })

   it('List The Favourite Dress',()=>{
    searchAllDress.findSpecificDress()
    FavouriteDress.addFavouriteDress()
   })

   it('Search the dress using different filter',()=>{
    searchAllDress.searchAll()
    Filterpage.filterFromSize()
    Filterpage.filterFromSlider()
   })

    it('Request To Book the dress',()=>{
    searchAllDress.searchAll()
    BorrowDress.requestToBookStepOne()
    BorrowDress.requestToBookStepTwo()
    BorrowDress.requestToBookStepThree()

    })

   it('Need 3Hr Delivery or Pickup??',()=>{
   FastDelivery.threeHrDelivery()
   })

   it('Featured Dress And View All Dresses',()=>{
    FeaturedPage.featuredDress()
    FeaturedPage.viewAllDress()
    FeaturedPage.totalDressNo()
   })

   it('Learn More About Renting',()=>{
    FeaturedPage.learnMoreAboutRenting()
    FeaturedPage.totalDressNo()
   })

   it('Browse All Dressess',()=>{
    FeaturedPage.browseAllDressess()
    FeaturedPage.totalDressNo()
   })

   it('Learn More About Lending',()=>{
    FeaturedPage.learnMoreAboutLending()
   })

   it('Hamburger Menu',()=>{
    HambugerMenu.hamburger()
    HambugerMenu.howitworkswologin()
    HambugerMenu.hamburger()
    HambugerMenu.rent()
    HambugerMenu.hamburger()
    HambugerMenu.lend()
    HambugerMenu.hamburger()
    HambugerMenu.designerdropdown()
    HambugerMenu.occasion()
    HambugerMenu.aboutus()
    HambugerMenu.hamburger()
    HambugerMenu.FAQ()
})

});