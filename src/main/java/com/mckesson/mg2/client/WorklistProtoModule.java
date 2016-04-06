/**
 * 
 */
package com.mckesson.mg2.client;

import javax.inject.Singleton;

import com.google.gwt.core.shared.GWT;
import com.google.web.bindery.event.shared.EventBus;
import com.googlecode.gwtphonegap.client.PhoneGap;

import dagger.Module;
import dagger.Provides;

/**
 * Dependency Injection Module
 * 
 * @author efdj6eb
 *
 */
@Module
@Singleton
public class WorklistProtoModule {

    /**
     * @return singleton PhoneGap instance
     */
    @Provides @Singleton static PhoneGap providePhoneGap() {
        return GWT.create(PhoneGap.class);
    }
    
    /**
     * @return singleton EventBus instance
     */
    @Provides @Singleton static EventBus provideEventBus() {
        return GWT.create(EventBus.class);
    }
}
