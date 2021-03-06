/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.TouchEndEvent;
import com.google.gwt.event.dom.client.TouchEndHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.InlineHTML;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.MainView;
import com.mckesson.mg2.client.patient.InterpretLabResultsView;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * container for handling worklist menu selections
 * 
 * @author efdj6eb
 *
 */
public abstract class WorklistView extends NavMenuView {
    
    /**
     * 
     */
    private static final String SELECT_LABS_TO_TRANSFER_PROVIDERS = "Select labs to transfer providers.";
    private static final String EDGE_OF_PROTOTYPE = "You have reached the edge of this prototype.";
    /**
     * logger
     */
    static final MG2Log log = new MG2Log(WorklistView.class);

    private static MainView mainView = MainView.get();    
    
    @UiField public InlineHTML tabLabResults;
    @UiField public InlineHTML tabSignOrders;
    @UiField public InlineHTML tabImaging;
    @UiField public InlineHTML tabReviewNotes;
    @UiField public InlineHTML tabOtherDocuments;
    @UiField public InlineHTML tabERX;
    
    /**
     * 
     */
    public static void gotoLabWorklistView() {
        log.info("gotoLabWorklistView()");
        mainView.gotoView((LabWorklistView) GWT.create(LabWorklistView.class));
        
    }
    public static void gotoLabWorklistView(String msg) {
        log.info("gotoLabWorklistView(" + msg 
                + ")");
        // clicked tab
        
        mainView.gotoView((LabWorklistView) GWT.create(LabWorklistView.class), msg);        
    }
    public static void gotoSignOrdersView() {
        log.info("gotoSignOrdersView()");
        // clicked tab
        
        mainView.gotoView((SignOrdersView) GWT.create(SignOrdersView.class), EDGE_OF_PROTOTYPE);        
    }
    public static void gotoImagingView() {
        log.info("gotoImagingView()");
        // clicked tab
        
        mainView.gotoView((ImagingView) GWT.create(ImagingView.class), EDGE_OF_PROTOTYPE);        
    }
    public static void gotoReviewNotesView() {
        log.info("gotoReviewNotesView()");
        // clicked tab
        
        mainView.gotoView((ReviewNotesView) GWT.create(ReviewNotesView.class), EDGE_OF_PROTOTYPE);        
    }
    public static void gotoOtherDocumentsView() {
        log.info("gotoOtherDocumentsView()");
        // clicked tab
        
        mainView.gotoView((OtherDocumentsView) GWT.create(OtherDocumentsView.class), EDGE_OF_PROTOTYPE);        
    }
    public static void gotoERXView() {
        log.info("gotoERXView()");
        // clicked tab
        
        mainView.gotoView((ERXView) GWT.create(ERXView.class), EDGE_OF_PROTOTYPE);        
    }
    /**
     * 
     */
    public static void gotoInterpretLabResults() {
        log.info("gotoInterpretLabResults()");
        
        // clicked tab
        final InterpretLabResultsView newView = GWT.create(InterpretLabResultsView.class);
        mainView.gotoView(newView);
    }

    public static void gotoLabWorklistBatchView() {
        log.info("gotoLabWorklistBatchView()");
        // clicked tab
        final LabWorklistBatchView newView = GWT.create(LabWorklistBatchView.class);
        
        mainView.gotoView(newView, WorklistView.SELECT_LABS_TO_TRANSFER_PROVIDERS);
    }


    /**
     * 
     */
    public static void gotoTransferProvider() {
        log.info("gotoTransferProvider()");
        // clicked tab
        
        mainView.gotoView((Widget) GWT.create(TransferProviderView.class));        
    }
    /*
     * (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Composite#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(final Widget widget) {
        super.initWidget(widget);

        // tab
        tabLabResults.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoLabWorklistView();
            }
        });
        tabLabResults.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                gotoLabWorklistView();                
            }
        });
        
        // tab
        tabSignOrders.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoSignOrdersView();
            }
        });
        tabSignOrders.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                gotoSignOrdersView();
            }
        });
        
        // tab
        tabImaging.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoImagingView();

            }
        });
        // tab
        tabReviewNotes.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoReviewNotesView();
            }
        });
        // tab
        tabOtherDocuments.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoOtherDocumentsView();
            }
        });
        // tab
        tabERX.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoERXView();
            }
        });

    }
}
